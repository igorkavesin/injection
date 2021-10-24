import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/shared/format-datepicker';
import * as moment from 'moment';

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

  startDate = new Date(1990, 0, 1);
  form = new FormGroup({
    annee: new FormControl(''),
    mois: new FormControl(''),
    provisoire: new FormControl(''),
    id_utilisateur: new FormControl(''),
  });

  constructor() {

  }

  ngOnInit(): void {
  }

}
