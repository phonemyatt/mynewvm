import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { VisitorModel } from './shared/visitormodel';
import { VisitorServices } from './shared/visitors.service';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator, MatSnackBar } from '@angular/material';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { EditVisitorDialogComponent } from './edit-visitor-dialog/edit-visitor-dialog.component';
import { ConfirmVisitorDialogComponent } from './confirm-visitor-dialog/confirm-visitor-dialog.component';


@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent implements AfterViewInit {
  selectedRowIndex = -1;
  displayedColumns = ['avatar', 'name', 'company', 'ic' , 'edit'];
  dataSource: MatTableDataSource<VisitorModel>;
  localvisitor: VisitorModel = {
    id: '',
    imgpath: '',
    name: '',
    position: '',
    company: '',
    ic: '',
    email: '',
    hp: '',
    address: '',
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

  // visitors$: Observable<any>;

  constructor(private db: VisitorServices,
              public dialog: MatDialog,
              public snackBar: MatSnackBar) {}

  // ngOnInit() {
  //   this.visitors$ = this.db.colRef.valueChanges();
  // }

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

  clickToSendEmail(data) {
    const text = `Dear ${data.name}, Hello from me your firebase email function.`;
    this.db.sendEmail(data.email, text);
    this.snackBar.open(`Send generated email to ${data.name}`, 'Dismiss', {duration: 2000});
  }
  clickToSendSMS(data) {
    const text = `Dear ${data.name}, Hello from me your dear firebase function.`;
    this.db.sendSms( data.hp, text);
    this.snackBar.open(`Send generated sms to ${data.name}`, 'Dismiss', {duration: 2000});
  }

  ngAfterViewInit() {
      this.db.returnVisitorCollections().valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

   onClick(row): void {
    this.selectedRowIndex = row.id;
    this.localvisitor = row;
  }

   openVisitorDialog( data ): void {
    const dialogRef = this.dialog.open( EditVisitorDialogComponent, {
      width: '600px',
      height: '700px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('Edited a visitor', 'Dismiss', {duration: 2000});
    });
  }
   deleteVisitorDialog( data ): void {
    // put dialog box here to confirm
    const dialogRef = this.dialog.open( ConfirmVisitorDialogComponent, {
      width: '350px',
      data: data
    });

    // this.db.deleteVisitor(data);
    dialogRef.afterClosed().subscribe(result => {
      if ( result === 'Yes') {
        this.selectedRowIndex = -1;
        this.localvisitor = {
            id: '',
            imgpath: '',
            name: '',
            position: '',
            company: '',
            ic: '',
            email: '',
            hp: '',
            address: '',
          };
          this.snackBar.open('Deleted a visitors', 'Dismiss', {duration: 2000});
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
    const dialogRef = this.dialog.open( EditVisitorDialogComponent, {
      width: '600px',
      height: '700px',
      data: 'new'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('Closed Add/Edit Dialog', 'Dismiss', {duration: 2000});
    });
  }

   addOneRandom() {
    this.db.addOneRandomVisitor();
  }

   generateData() {
    this.db.generateVisitors(50);
    this.snackBar.open('Generated 50 visitors', 'Dismiss', {duration: 2000});
  }
   deleteAllVisitors() {
    this.db.deleteVisitorCollection('visitors', 5). subscribe();
    this.snackBar.open('Deleted all visitors', 'Dismiss', {duration: 2000});
  }
}
