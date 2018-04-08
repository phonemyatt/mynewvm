import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CompaniesServices } from './../shared/companies.service';
import { CompaniesModel } from './../shared/companiesmodel';

@Component({
  selector: 'app-edit-company-dialog',
  templateUrl: './edit-company-dialog.component.html',
  styleUrls: ['./edit-company-dialog.component.css']
})
export class EditCompanyDialogComponent {
  title: string;
  company: CompaniesModel =  {
    id: '',
    imgpath: '',
    name: '',
    address1: '',
    address2: '',
    country: '',
    postal: '',
    cemail: '',
    tel: '',
    fax: '',
    homelink: '',
    permission: '',
  };
  constructor(private afs: CompaniesServices,
    public dialogRef: MatDialogRef<EditCompanyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if ( data === 'new' ) {
        this.title = 'New Visitor Profile';
      } else {
        this.company.id = data.id;
        this.company.imgpath = data.imgpath;
        this.company.name = data.name;
        this.company.address1 = data.address1;
        this.company.address2 = data.address2;
        this.company.country = data.country;
        this.company.postal = data.postal;
        this.company.cemail = data.cemail;
        this.company.tel = data.tel;
        this.company.fax = data.fax;
        this.company.homelink = data.homelink;
        this.company.permission = data.permission;
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateCompany(): void {
    (this.data === 'new') ? this.afs.addOneCustomerCompany(this.company) : this.afs.updateCustomerCompany(this.company);
    this.dialogRef.close();
  }
}
