import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemaineComponent } from './ws/generer-injection-comptable/semaine/semaine.component';
import { MoisComponent } from './ws/generer-injection-comptable/mois/mois.component';
import { HomeComponent } from './home/home.component';
import { GenererInjectionComptableComponent } from './ws/generer-injection-comptable/generer-injection-comptable.companent';


const routes: Routes = [
  { path: "" , component: GenererInjectionComptableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
