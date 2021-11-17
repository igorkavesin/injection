import { Component, OnInit, Input, ViewChild, VERSION } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { AppDateYearAdapter, APP_MODE_FORMATS_YEAR } from 'src/app/shared/format-datepicker';
import { IForm } from '../../../shared/interface/iform';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';

import * as _moment from 'moment';

import {default as _rollupMoment, Moment} from 'moment';
const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

interface Utilisateurs {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-verrouillage-des-paiements',
  templateUrl: './verrouillage-des-paiements.component.html',
  styleUrls: ['./verrouillage-des-paiements.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    { provide: DateAdapter, useClass: AppDateYearAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_MODE_FORMATS_YEAR },
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
  ]
})

// { provide: MAT_DATE_FORMATS, useValue: APP_MODE_FORMATS_YEAR_MONTH },
export class VerrouillageDesPaiementsComponent implements OnInit {


  version = VERSION;
  date = new Date();
  chosenYearDate: Date | undefined;
  chosenMonthDate: Date = new Date(2020,0,1);
  chosenSemesterDate: Date | undefined;
  chosenWeekDate: Date | undefined;
  chosenDate: Date | undefined;
  monthInputCtrl: FormControl = new FormControl(new Date(2020,0,1));

  visible = true;



  public err_annee: string ="";

  @Input() public hint: boolean | undefined;

  @ViewChild('picker') datePickerElement = MatDatepicker;


  utilisateurs: Utilisateurs[] = [
    {value: '3051', viewValue: 'olivier'},
    {value: '2364', viewValue: 'mathie'},
    {value: '5245', viewValue: 'anthoni'},
  ];

  public dated = new FormControl(moment()) ;

  public form = this.fb.group({
    utilisateur: [this.utilisateurs[1]],
    id_utilisateur: [null, [Validators.required, Validators.pattern('^[0-9]{2, 10}')]],
    annee_mois: [null, [Validators.required ]],
    date: [moment()],
    provisoire: [null]
  });

  autoRenew = new FormControl();
  onChange() {
    console.log(this.autoRenew.value + " " + this.form.controls.annee.value );
    if( this.autoRenew.value || this.form.controls.annee.value === 'null' ) {
      this.err_annee = ' onChange => test ';
    }
  }

  ngOnInit(): void {
    console.log(this.datePickerElement)
    setTimeout(() => { },1000)
  }

  modelChanged(date: string) {
    var theDate = new Date(Date.parse(date));
    const localDate = theDate.toLocaleString().split(" ");
    console.log(localDate);
  }

  // https://stackblitz.com/edit/angular-mulitdate-picker-demo
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
    console.log('getValueFromInput =>', this.form.controls.annee_mois.value);
    return 'ERROR';
  }

}
