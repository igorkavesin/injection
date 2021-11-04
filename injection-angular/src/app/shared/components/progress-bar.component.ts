import { Component, OnInit, Input} from '@angular/core';
import { SimpleDialogComponent } from './simple-dialog.component';

@Component({
  selector: 'app-progress-bar',
  providers: [SimpleDialogComponent],
  template: `
    <div *ngIf="!loading else load"> </div>
      <ng-template #load>
        <mat-progress-bar mode="indeterminate"></mat-progress-bar>
      </ng-template>`
})
export class ProgressBarComponent implements OnInit {

  @Input() public loading: boolean = false ;
   
  constructor(public f : SimpleDialogComponent) { 
     
    console.log("this.loading", this.loading);
    if(!this.loading) {
      f.openWindow();
    }
      
  }

  ngOnInit() {
  }

}
