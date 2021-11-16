import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IForm } from '../interface/iform';
import { RequestService } from '../services/request.service';
import { SimpleDialogComponent } from './simple-dialog.component';



@Component({
  selector: 'app-buttons-test-clear',
  providers: [SimpleDialogComponent],
  template: `
    <app-progress-bar [loading]="loading"></app-progress-bar>
    <button mat-raised-button color="primary" style="margin:5px;"
      (click)="btnSend($event)"
      class="submit-button"
      #send
      [disabled]="form.invalid">
      <mat-icon> mail_outline</mat-icon> Tester
    </button>

    <button mat-raised-button color="ink-ripple" style="margin:5px;"
      (click)="btnClear()"
      *ngIf="!btnHiteClear">
      <mat-icon>delete_sweep</mat-icon> Effacer
    </button>`,
})
export class ButtonsTestClearComponent implements OnInit {

  @Input() public btnHiteClear: boolean = false;
  @Input() public btnName: string | undefined;
  @Input() public form: FormGroup = new FormGroup({});
  @Input() public formApi: IForm | undefined;

  @ViewChild('send', {read: ElementRef, static: false}) public send: ElementRef | undefined;
  public loading: boolean = false;
  public path: string | undefined;

  constructor(public d: SimpleDialogComponent, public req: RequestService ) {
    if(true) {
      // this.loading = true;
      // this.d.openWindow("Bloqué par valeur 9");
    }
  }

  ngOnInit() {
  }

  private doRequest(): void {
    alert(" doRequest ");

    this.loading = false;
  }

  public btnSend(event : MouseEvent) {
    this.path = this.formApi?.callValueFromInput('');

    console.log(" this.path =>",  this.path );
    this.form.disable();
    (event.target as HTMLButtonElement).disabled = true;
    // this.d.openWindow("Attendez s'il vous plait ");
    this.loading = true;
  }

  public btnClear(): void {
    this.form.reset();

  }

}

