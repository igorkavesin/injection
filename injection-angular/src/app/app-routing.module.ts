import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemaineComponent } from './ws/generer-injection-comptable/semaine/semaine.component';
import { VerrouillageDesPaiementsComponent } from './ws/generer-injection-comptable/verrouillage-des-paiements/verrouillage-des-paiements.component';
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
