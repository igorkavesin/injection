import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { YearPickerComponent } from '../shared/components/multidatepicker/year-picker/year-picker.component';
import { MultiDatepickerComponent } from '../shared/multidatepicker/multidatepicker.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,
  ],
  declarations: [
    MultiDatepickerComponent,
    YearPickerComponent
  ],
  entryComponents: [],
  exports: [
    MultiDatepickerComponent
  ],
})
export class MultiDatepickerModule { }
