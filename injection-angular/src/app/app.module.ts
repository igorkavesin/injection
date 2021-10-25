import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SemaineComponent } from './ws/generer-injection-comptable/semaine/semaine.component';
import { MoisComponent } from './ws/generer-injection-comptable/mois/mois.component';
import { NgComponent } from './ng/ng.component';
import { HomeComponent } from './home/home.component';
import { MatSliderModule } from '@angular/material/slider';

import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { WsDescriptionComponent } from './ws/generer-injection-comptable/ws-description/ws-description.component';
import { GenererInjectionComptableComponent } from './ws/generer-injection-comptable/generer-injection-comptable.companent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsTestClearComponent } from './shared/components/buttons-test-clear.component';
import { ProgressBarComponent } from './shared/components/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,



    SemaineComponent,
    MoisComponent,
    NgComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WsDescriptionComponent,
    GenererInjectionComptableComponent,
    ProgressBarComponent,
    ButtonsTestClearComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
