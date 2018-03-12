import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { expand, takeWhile, mergeMap, take, combineAll } from 'rxjs/operators';
import * as faker from 'faker'; // optional
import 'rxjs/add/operator/mergeMap';
import { CompanyModel, CustomerCompanyModel } from './companymodel';

@Injectable()
export class CompaniesServices {
    private mycompanylink = 'mycompany';
    private singleRef = this.afs.collection(this.mycompanylink).doc('super');

    private mycustomerlink = "customers" // this.mycompanylink + '/customers';
    private colRef = this.afs.collection(this.mycustomerlink, ref => ref.orderBy('__name__'));

    constructor(private afs: AngularFirestore) { }

    getOne() {
        this.singleRef.ref.get().then(doc => {
            if (!doc.exists) {
                this.generateOne();
                this.getOne();
            }
        });
        return this.afs.collection('mycompany', ref => ref.where('permission', '==', 'superadmin')
            .limit(1)).valueChanges().flatMap(result => result);
    }

    addOne(data: CompanyModel) {
        if (data) {
            this.singleRef.set(data);
        }
    }
    generateOne() {
        const company: CompanyModel = {
            id: 'super',
            imgpath: 'https://anewtech.files.wordpress.com/2014/11/anewtech-systems-logo.jpg?w=848',
            permission: 'superadmin',
            name: 'Anewtech Systems Pte Ltd',
            desc: 'Leading IPC Supplier and Solutions Provider',
            remark: `We are well established company in South East Asia providing world class services
            and solutions to manufacturing and medical industry
            with clear objectives and success stories to follow.`,
            address: `62 Ubi Road 1, #04-14
            Oxley Bizhub 2,
            Singapore 408734`,
            tel: '+6562920801',
            fax: '+656292 0831',
            cemail: 'support0414@anewtech.com.sg',
            homelink: 'http://www.anewtech.net/',
            fblink: 'https://www.facebook.com/anewtech.net/',
            googlelink: 'https://www.google.com/search?q=anewtech+systems',
        };
        this.singleRef.set(company);
    }
    updateOne(data: CompanyModel) {
        if (data) {
            this.singleRef.update({
                id: 'super',
                imgpath: data.imgpath,
                permission: data.permission, 
                name: data.name,
                desc: data.desc,
                remark: data.remark,
                address: data.address,
                tel: data.tel,
                fax: data.fax,
                cemail: data.cemail,
                homelink: data.homelink,
                fblink: data.fblink,
                googlelink: data.googlelink,
            });
        }
    }

    deleteCustomerCompany(company: CustomerCompanyModel) {
        this.afs.collection(this.mycustomerlink).doc(company.id).delete();
    }

    updateCustomerCompany(company: CustomerCompanyModel) {
        this.afs.collection(this.mycustomerlink).doc(company.id).update({
            permission:company.permission,
            imgpath: company.imgpath,
            name: company.name,
            desc: company.desc,
            remark: company.remark,
            address: company.address,    
            tel: company.tel,
            fax: company.fax,
            cemail: company.cemail,
            homelink: company.homelink,
            fblink: company.fblink,
            googlelink: company.googlelink,
        });
    }

    returnCustomerCompanyCollections() {
        return this.afs.collection<CustomerCompanyModel>(this.mycustomerlink);
    }

    addOneCustomerCompany(company: CustomerCompanyModel) {
        if ( company ) {
            this.colRef.add(company).then(x => {
                this.afs.collection(this.mycustomerlink).doc(x.id).update({
                    id: x.id
                });
            });
        }
    }

    addOneRandomCustomerCompany() {
        const company: CustomerCompanyModel =  {
            id: '',
            permission:faker.internet.userAgent(),
            imgpath: faker.image.business(),
            name: faker.company.companyName(),
            desc: faker.lorem.paragraph(),
            remark: faker.lorem.sentence(),
            address: faker.address.streetAddress(),    
            tel: faker.phone.phoneNumber(),
            fax: faker.phone.phoneNumber(),
            cemail: faker.company.email(),
            homelink: faker.internet.url(),
            fblink: faker.internet.url(),
            googlelink: faker.internet.url()
        };
        this.colRef.add(company).then(x => {
            this.afs.collection(this.mycustomerlink).doc(x.id).update({
                id: x.id
            });
        });
    }

    generateCustomerCompanies(size: number) {
        for (const i of Array(size)) {
            const dummyData: CustomerCompanyModel = {
                id: '',
                permission:faker.internet.userAgent(),
                imgpath: faker.image.business(),
                name: faker.company.companyName(),
                desc: faker.lorem.paragraph(),
                remark: faker.lorem.sentence(),
                address: faker.address.streetAddress(),    
                tel: faker.phone.phoneNumber(),
                fax: faker.phone.phoneNumber(),
                cemail: faker.company.email(),
                homelink: faker.internet.url(),
                fblink: faker.internet.url(),
                googlelink: faker.internet.url()
            };
            this.colRef.add(dummyData).then(x => {
                this.colRef.doc(x.id).update({
                    id: x.id
                });
            });
        };
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
