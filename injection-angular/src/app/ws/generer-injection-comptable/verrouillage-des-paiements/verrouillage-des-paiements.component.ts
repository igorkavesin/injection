import { Component, OnInit, Input, VERSION } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { IForm } from '../../../shared/interface/iform';
import { MatDialog } from '@angular/material/dialog';
interface iselect {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-verrouillage-des-paiements',
  templateUrl: './verrouillage-des-paiements.component.html',
  styleUrls: ['./verrouillage-des-paiements.component.scss'],
  providers: []
})

export class VerrouillageDesPaiementsComponent implements OnInit {

  @Input() public hint: boolean | undefined;
  @Input() public btnTest: boolean | undefined;

  chosenYearDate: Date = new Date(2021, 0, 1);

  utilisateurs: iselect[] = [
    {value: '3051', viewValue: 'olivier'},
    {value: '2364', viewValue: 'mathie'},
    {value: '5245', viewValue: 'anthoni'},
  ];

  ssaisons: iselect[] = [
    {value: 'Mois', viewValue: '1'},
    {value: 'Semaine', viewValue: '2'},
  ];

  selected = this.ssaisons[0].value; 

 // [Validators.required, Validators.pattern('^[0-9]{2, 10}')]

  public form = this.fb.group({
    year: [null, [Validators.required ]],
    select_saison: [this.ssaisons[0].value, [Validators.required ]],
    isaison: [null, [Validators.required ]],
    sutilisateur: [this.utilisateurs[0].value, [Validators.required ]],
    provisoire: [null]
  });

  onChange() {
  }

  ngOnInit(): void {
    setTimeout(() => {  }, 1000)
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
    this.form.disable();
    let year = this.form.controls.year.value;
    let res = String(year);
    // Fri Jan 01 199d9d 00:00:00 GMT+0100 (heure normale d’Europe centrale)
    let mat = res.match(/\s[\d]{4}\s/);
    
    alert(mat);

    let v = this.getVal( (mat ) ) ;

    console.log('getValueFromInput =>', v);
    console.log('getValueFromInput =>', this.form.controls.year.value);
    return 'ERROR';
  }
  public getVal( s: any): string {
    
    let r = s !== null ? s[0] : 'null';
    
    return JSON.stringify(r);
  }

}
