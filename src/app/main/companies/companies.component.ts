import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CompaniesServices } from './shared/companies.service';
import { CompaniesModel } from './shared/companiesmodel';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator, MatSnackBar } from '@angular/material';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { EditCompanyDialogComponent } from './edit-company-dialog/edit-company-dialog.component';
import { ConfirmCompanyDialogComponent } from './confirm-company-dialog/confirm-company-dialog.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements AfterViewInit {
  selectedRowIndex = -1;
  displayedColumns = ['avatar', 'name', 'country', 'permission', 'edit'];
  dataSource: MatTableDataSource<CompaniesModel>;
  localcompany: CompaniesModel = {
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

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  selecteddesign: String = 'show-2';
  topDesign: Boolean = true;
  botDesign: Boolean = false;
  profiledesigns = [
    { value: 'show-1', viewValue: 'Show all' },
    { value: 'show-2', viewValue: 'Show top' },
    { value: 'show-3', viewValue: 'Show bottom' },
    { value: 'hide-1', viewValue: 'Hide all' },
  ];

  constructor(private db: CompaniesServices,
              public dialog: MatDialog,
              public snackBar: MatSnackBar) {}

 checkDesignSelection(value) {
    console.log('check' + value);
    switch (this.selecteddesign) {
      case 'show-1': {
        this.topDesign = true;
        this.botDesign = true;
        break;
     }
     case 'show-2': {
        this.topDesign = true;
        this.botDesign = false;
        break;
     }
     case 'show-3': {
       this.topDesign = false;
       this.botDesign = true;
       break;
     }
     case 'hide-1': {
        this.topDesign = false;
        this.botDesign = false;
        break;
     }
     default: {
        console.log('invalid choice');
        break;
     }
    }
  }

  ngAfterViewInit() {
      this.db.returnCompanyCollections().valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  onClick(row): void {
    this.selectedRowIndex = row.id;
    this.localcompany = row;
  }

  openCustomerCompanyDialog( data ): void {
    const dialogRef = this.dialog.open( EditCompanyDialogComponent, {
      width: '600px',
      height: '700px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('Edited a company', 'Dismiss', {duration: 2000});
    });
  }

  deleteCustomerCompanyDialog( data ): void {
    // put dialog box here to confirm
    const dialogRef = this.dialog.open( ConfirmCompanyDialogComponent, {
      width: '350px',
      data: data
    });


    dialogRef.afterClosed().subscribe(result => {
      if ( result === 'Yes') {
        this.selectedRowIndex = -1;
        this.localcompany = {
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
          this.snackBar.open('Deleted a company', 'Dismiss', {duration: 2000});
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  trackByUid(index, item) {
    return item.uid;
  }

  addOne() {
    // for dialog to create new visitor
    const dialogRef = this.dialog.open( EditCompanyDialogComponent, {
      width: '600px',
      height: '700px',
      data: 'new'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('Closed Add/Edit Dialog', 'Dismiss', {duration: 2000});
    });
  }

  addOneRandom() {
    this.db.addOneRandomCustomerCompany();
  }

  generateData() {
    this.db.generateCustomerCompanies(50);
    this.snackBar.open('Generated 50 Companies', 'Dismiss', {duration: 2000});
  }
   deleteAllCustomerCompanies() {
    this.db.deleteCustomerCompanyCollection('companies', 5). subscribe();
    this.snackBar.open('Deleted all Companies', 'Dismiss', {duration: 2000});
  }
}
