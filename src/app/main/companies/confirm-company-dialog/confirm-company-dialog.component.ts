import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CompaniesServices } from './../shared/companies.service';
import { CompaniesModel } from './../shared/companiesmodel';

@Component({
  selector: 'app-confirm-company-dialog',
  templateUrl: './confirm-company-dialog.component.html',
  styleUrls: ['./confirm-company-dialog.component.css']
})

export class ConfirmCompanyDialogComponent {
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
  public dialogRef: MatDialogRef<ConfirmCompanyDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {
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

  onNoClick(): void {
    this.dialogRef.close('No');
  }

  onConfirm(): void {
    this.afs.deleteCustomerCompany(this.company);
    this.dialogRef.close('Yes');
  }
}
