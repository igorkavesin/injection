import { NativeDateAdapter, MatDateFormats } from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
import { Injectable } from "@angular/core";

const moment = _rollupMoment || _moment;
@Injectable()
export class AppDateYearMonthAdapter extends NativeDateAdapter {

  public format(inputDate: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      const dateFormat = 'YYYY-MM';
      const toDateFormat = moment(inputDate).format(dateFormat);
      if (moment(toDateFormat, dateFormat, true).isValid()) {
        const d = toDateFormat.split('-');
        const year = d[0];
        const month = d[1];
        return `${year}-${month}`;
      }
    }
    return inputDate.toDateString();
  }
}

export const APP_MODE_FORMATS_YEAR_MONTH: MatDateFormats = {
  parse: {
    dateInput: 'YYYY-MM',
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'numeric' },
    dateA11yLabel: { year: 'numeric', month: 'short' },
    monthYearA11yLabel: { year: 'numeric', month: 'short' }
  }
};

@Injectable()
export class AppDateYearDayAdapter extends NativeDateAdapter {
  format(inputDate: Date, displayFormat: Object): string {
    const dateFormat = 'YYYY-DD';
    const toDateFormat = moment(inputDate).format(dateFormat);
    if (moment(toDateFormat, dateFormat, true).isValid()) {
      return moment(inputDate).format(dateFormat);
    }
    return inputDate.toDateString();
  }
}

export const APP_MODE_FORMATS_YEAR_DAY: MatDateFormats = {
  parse: {
    dateInput: 'YYYY-DD',
  },
  display: {
    dateInput: 'YYYY-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};
