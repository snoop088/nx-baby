import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { SharedModule } from '@se/shared';
import { PeopleModule } from '@se/people';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' }, // redirect to `first-component`
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    PeopleModule,
    RouterModule.forRoot(routes),
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
