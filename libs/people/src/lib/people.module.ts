import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { API, SharedModule } from '@se/shared';
import { apiConfig } from './api/api-config';
import { PeopleComponent } from './people/people.component';

export const peopleRoutes: Route[] = [
  {
    path: 'people', 
    component: PeopleComponent
  }
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule, 
    SharedModule,
    RouterModule.forChild(peopleRoutes)
  ],
  providers: [{
    provide: API,
    useValue: apiConfig
  }],
  exports: [
    RouterModule
  ],
  declarations: [PeopleComponent]
})
export class PeopleModule {}
