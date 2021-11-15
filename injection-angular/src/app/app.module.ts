import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SemaineComponent } from './ws/generer-injection-comptable/semaine/semaine.component';
import { VerrouillageDesPaiementsComponent } from './ws/generer-injection-comptable/verrouillage-des-paiements/verrouillage-des-paiements.component';
import { NgComponent } from './ng/ng.component';
import { HomeComponent } from './home/home.component';
import { MatSliderModule } from '@angular/material/slider';

import { MaterialModule } from './material/material.module';
import { CommonModule, JsonPipe, HashLocationStrategy, registerLocaleData  } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { WsDescriptionComponent } from './ws/generer-injection-comptable/ws-description/ws-description.component';
import { GenererInjectionComptableComponent } from './ws/generer-injection-comptable/generer-injection-comptable.companent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsTestClearComponent } from './shared/components/buttons-test-clear.component';
import { ProgressBarComponent } from './shared/components/progress-bar.component';
import { SlideToggleErrorComponent } from './shared/components/slide-toggle-error.component';
import { SimpleDialogComponent } from './shared/components/simple-dialog.component';
import { RequestService } from './shared/services/request.service';
import {MatRadioModule} from '@angular/material/radio'; 
 

import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { MatDatepickerModule } from '@angular/material/datepicker';
registerLocaleData(localeFr, 'fr-FR');



@NgModule({
  declarations: [
    AppComponent,
    SemaineComponent,
    VerrouillageDesPaiementsComponent,
    NgComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WsDescriptionComponent,
    GenererInjectionComptableComponent,
    ProgressBarComponent,
    ButtonsTestClearComponent,
    SlideToggleErrorComponent,
    SimpleDialogComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule,
    MatDatepickerModule
  ],
  providers: [
    RequestService,
    { provide: JsonPipe, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
