import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountriesComponent} from './countries/countries.component';
import { CountriesDetailsComponent } from './countries-details/countries-details.component';

const routes: Routes = [
  { path: "countries", component: CountriesComponent },
  { path: "countries/:name", component: CountriesDetailsComponent },
  { path: "", redirectTo: "countries", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
