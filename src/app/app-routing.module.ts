import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { JewelleryComponent } from './pages/jewellery/jewellery.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"jewllery", component:JewelleryComponent},
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
