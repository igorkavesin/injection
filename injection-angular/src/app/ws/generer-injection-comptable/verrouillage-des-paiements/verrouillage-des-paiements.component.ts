import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppDateYearMonthAdapter, APP_MODE_FORMATS_YEAR_MONTH } from 'src/app/shared/format-datepicker';
import { IForm } from '../../../shared/interface/iform';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { Moment } from 'moment';
interface Utilisateurs {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-verrouillage-des-paiements',
  templateUrl: './verrouillage-des-paiements.component.html',
  styleUrls: ['./verrouillage-des-paiements.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateYearMonthAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_MODE_FORMATS_YEAR_MONTH },
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
  ]
})


export class VerrouillageDesPaiementsComponent implements OnInit {

  public err_annee: string ="";
  public date: string | undefined;
  @Input() public hint: boolean | undefined;

  @ViewChild('picker') datePickerElement = MatDatepicker;
  

  utilisateurs: Utilisateurs[] = [
    {value: '3051', viewValue: 'MALIKA '},
    {value: '2364', viewValue: 'MALIKA '},
    {value: '5245', viewValue: 'MALIKA '},
  ];

   

  public form = this.fb.group({
    utilisateur: [this.utilisateurs[1]],
    id_utilisateur: [null, [Validators.required, Validators.pattern('^[0-9]{2,10}')]],
    annee_mois: [null, [Validators.required ]],
    provisoire: [null]
  });

  autoRenew = new FormControl();
  onChange() {
    console.log(this.autoRenew.value + " " + this.form.controls.annee.value );

    if( this.autoRenew.value || this.form.controls.annee.value === 'null' ) {
      this.err_annee = ' ooooo ';

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


  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { 
     
  }

  public getValueFromInputApi(): IForm {
    return {
      callValueFromInput: (name) => {
        return this.getValueFromInput(name);
      }
    };
  }
  
  public getValueFromInput(name: string): string {
    console.log('=====================>', this.form.controls.annee_mois.value);
    return 'ERROR';
  }

}
