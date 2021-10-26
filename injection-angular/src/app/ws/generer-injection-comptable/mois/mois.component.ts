import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/shared/format-datepicker';
import { IForm } from '../../../shared/interface/iform';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mois',
  templateUrl: './mois.component.html',
  styleUrls: ['./mois.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
  ]
})
export class MoisComponent implements OnInit {

  public err_annee: string ="";

  @Input() public hint: boolean | undefined;
  public form = this.fb.group({

    annee: [null, [Validators.required, Validators.pattern('^[0-9]{4}')]],
    mois: [null, [Validators.required, Validators.pattern('^[0-9]{2}')]],
    id_utilisateur: [null, [Validators.required, Validators.pattern('^[0-9]{2,10}')]],
    provisoire: [null],
  });

  autoRenew = new FormControl();
  onChange() {
    console.log(this.autoRenew.value + " " + this.form.controls.annee.value );

    if( this.autoRenew.value || this.form.controls.annee.value === 'null' ) {
      this.err_annee = ' ooooo ';

    }
  }




  // form = new FormGroup({
  //   annee: new FormControl(''),
  //   mois: new FormControl(''),
  //   provisoire: new FormControl(''),
  //   id_utilisateur: new FormControl(''),
  // });

  ngOnInit(): void {
    // this.form = this.fb.group({

    //   annee: [null, [Validators.required, Validators.pattern('[0-9]')]],
    //   mois: [null, [Validators.required, Validators.pattern('[0-9]')]],
    //   id_utilisateur: [null, [Validators.required]],
    //   provisoire: [null],
    // });


  }

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  public getValueFromInputApi(): IForm {
    return {
      callValueFromInput: (name) => {
        return this.getValueFromInput(name);
      }
    };
  }

  public getValueFromInput(name: string): string {
    return 'ERROR';
  }




}
