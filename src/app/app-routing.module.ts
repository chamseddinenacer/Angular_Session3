import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ShowProduitComponent } from './show-produit/show-produit.component';






const routes: Routes = [


  {path:'Detail_Produit', component:DetailProduitComponent},
  {path:'', component:ShowProduitComponent},



];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
