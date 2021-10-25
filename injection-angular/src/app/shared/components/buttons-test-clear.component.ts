import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IForm } from '../interface/iform';



@Component({
  selector: 'app-buttons-test-clear',
  template: `
    <app-progress-bar [loading]="loading"></app-progress-bar>
    <button mat-raised-button color="primary" style="margin:5px;"
      (click)="btnSend()"
      class="submit-button"
      #send
      [disabled]="form.invalid">
      <mat-icon> mail_outline</mat-icon>
      {{(btnName ? btnName : 'Tester')}}
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
  public path: string = "";

  constructor() { 
  }

  ngOnInit() {
  }

  private doRequest(): void {
    alert(" doRequest ");

    this.loading = false;
  }

  public btnSend() {
    alert(" BLOCAGE ");

    this.loading = true;
  }

  public btnClear(): void {
    this.form.reset();
  }

}

