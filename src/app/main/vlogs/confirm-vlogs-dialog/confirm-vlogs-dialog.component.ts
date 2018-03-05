import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VLogsServices } from './../shared/vlogs.service';
import { LogModel, LogUIModel } from './../shared/vlogmodel';

@Component({
  selector: 'app-confirm-vlogs-dialog',
  templateUrl: './confirm-vlogs-dialog.component.html',
  styleUrls: ['./confirm-vlogs-dialog.component.css']
})
export class ConfirmVlogsDialogComponent {
  logid = '';

  constructor(private afs: VLogsServices,
    public dialogRef: MatDialogRef<ConfirmVlogsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.logid = data.id; }

  onNoClick(): void {
    this.dialogRef.close('No');
  }
  onConfirm(): void {
    this.afs.deleteLog(this.logid);
    this.dialogRef.close('Yes');
  }


}
