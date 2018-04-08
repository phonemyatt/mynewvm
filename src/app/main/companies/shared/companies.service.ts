import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { expand, takeWhile, mergeMap, take, combineAll } from 'rxjs/operators';
import * as faker from 'faker'; // optional
import { CompaniesModel } from './companiesmodel';

@Injectable()
export class CompaniesServices {
    private companieslink = 'companies';
    private colRef = this.afs.collection(this.companieslink, ref => ref.orderBy('__name__'));
    constructor(private afs: AngularFirestore, private https: HttpClient) { }


    deleteCustomerCompany(company: CompaniesModel) {
        this.afs.collection(this.companieslink).doc(company.id).delete();
    }

    updateCustomerCompany(company: CompaniesModel) {
        this.afs.collection(this.companieslink).doc(company.id).update({
            imgpath: company.imgpath,
            name: company.name,
            address1: company.address1,
            address2: company.address2,
            country: company.country,
            postal: company.postal,
            cemail: company.cemail,
            tel: company.tel,
            fax: company.fax,
            homelink: company.homelink,
            permission: company.permission,
        });
    }

    returnCompanyCollections() {
        return this.afs.collection<CompaniesModel>(this.companieslink);
    }

    addOneCustomerCompany(company: CompaniesModel) {
        if (company) {
            this.colRef.add(company).then(x => {
                this.afs.collection(this.companieslink).doc(x.id).update({
                    id: x.id
                });
            });
        }
    }

    addOneRandomCustomerCompany() {
        const company: CompaniesModel = {
            id: '',
            imgpath: faker.image.avatar(),
            name: faker.company.companyName(),
            address1: faker.address.streetAddress(),
            address2: faker.address.streetAddress(),
            country: faker.address.country(),
            postal: faker.address.zipCode(),
            tel: faker.phone.phoneNumber(),
            fax: faker.phone.phoneNumber(),
            cemail: faker.internet.email(),
            homelink: faker.internet.url(),
            permission: faker.name.jobTitle()
        };
        this.colRef.add(company).then(x => {
            this.afs.collection(this.companieslink).doc(x.id).update({
                id: x.id
            });
        });
    }

    generateCustomerCompanies(size: number) {
        for (const i of Array(size)) {
            const dummyData: CompaniesModel = {
                id: '',
                imgpath: faker.image.avatar(),
                name: faker.company.companyName(),
                address1: faker.address.streetAddress(),
                address2: faker.address.streetAddress(),
                country: faker.address.country(),
                postal: faker.address.zipCode(),
                tel: faker.phone.phoneNumber(),
                fax: faker.phone.phoneNumber(),
                cemail: faker.internet.email(),
                homelink: faker.internet.url(),
                permission: faker.name.jobTitle()
            };
            this.colRef.add(dummyData).then(x => {
                this.colRef.doc(x.id).update({
                    id: x.id
                });
            });
        }
    }

    deleteCustomerCompanyCollection(path: string, batchSize: number): Observable<any> {
        const source = this.deleteBatch(path, batchSize);
        // expand will call deleteBatch recursively until the collection is deleted
        return source.pipe(
            expand(val => this.deleteBatch(path, batchSize)),
            takeWhile(val => val > 0)
        );
    }

    // Detetes documents as batched transaction
    private deleteBatch(path: string, batchSize: number): Observable<any> {
        const colRef = this.afs.collection(path, ref => ref.orderBy('__name__').limit(batchSize));
        return colRef.snapshotChanges().pipe(
            take(1),
            mergeMap(snapshot => {

                // Delete documents in a batch
                const batch = this.afs.firestore.batch();
                snapshot.forEach(doc => {
                    batch.delete(doc.payload.doc.ref);
                });
                return fromPromise(batch.commit()).map(() => snapshot.length);
            })
        );
    }
}
