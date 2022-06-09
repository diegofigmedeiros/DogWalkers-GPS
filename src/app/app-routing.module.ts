import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from "./layout/cadastro/cadastro.component";
import { PrincipalComponent } from "./layout/principal/principal.component";
import {ClientesCadastradosComponent} from "./layout/clientes-cadastrados/clientes-cadastrados.component";
import {PrestadoresCadastradosComponent} from "./layout/prestadores-cadastrados/prestadores-cadastrados.component";


const routes: Routes = [
  {
    path: "",
    component: PrincipalComponent
  },
  {
    path: "cadastros",
    component: CadastroComponent
  },
  {
    path: "clientes-cadastrados",
    component: ClientesCadastradosComponent
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
