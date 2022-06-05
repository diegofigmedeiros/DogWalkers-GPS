import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from "./layout/principal/principal.component";
import {PrestadoresCadastradosComponent} from "./layout/prestadores-cadastrados/prestadores-cadastrados.component";


const routes: Routes = [
  {
    path: "",
    component: PrincipalComponent
  },
  {
    path: "prestadores-cadastrados",
    component: PrestadoresCadastradosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
