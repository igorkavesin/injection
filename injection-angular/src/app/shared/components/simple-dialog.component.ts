import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@Component({
  selector: 'app-simple-dialog',
  template: ''
})
export class SimpleDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openWindow(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position ={
      'top': '0',
      'left':'0'
    }

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Dialog progress...' 
    }

    let dial = this.dialog.open(DialogComponent, dialogConfig);
      dial.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
      );
  }

  ngOnInit(): void {}
}

@Component({
  template: `
    <h1 mat-dialog-title>Certaines opérations ont été bloquées par le service d'envois #9!!! </h1>
      <p style="color:red;"> 9) Bloquée </p>
      <p style="color:red;"> 1) True </p>
      <p style="color:red;"> 0) False </p>
    <button class="mat-raised-button"(click)="closeDialog()">Close</button>
  `,
})
export class DialogComponent { 

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any   
  ) {}
  
  closeDialog(): void {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(
      data => console.log("close DIALOG CLASS ", this.data) 
    );
  }
}

class ActionDialog {
  
  constructor() {}
  setEventFromDialog() {}
  getEventFromDialog() {}
}

