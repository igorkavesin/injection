import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@Component({
  selector: 'app-simple-dialog',
  template: ''
})
export class SimpleDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openWindow(massage: string | any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { }

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: massage 
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
    <h1 class="saving" mat-dialog-title>
      
    {{data.title}}
    <span>.</span><span>.</span><span>.</span>
  
  </h1>
    


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
      data => console.log("Dialog after close:", this.data) 
    );
  }
}

class ActionDialog {
  
  constructor() {}
  setEventFromDialog() {}
  getEventFromDialog() {}
}

