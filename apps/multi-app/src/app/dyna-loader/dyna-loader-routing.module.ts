import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynaLoaderComponent } from './dyna-loader.component';


const routes: Routes = [
  {
    path: 'dynamic',
    component: DynaLoaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynaLoaderRoutingModule { }
