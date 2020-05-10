import { Component, Inject, forwardRef, Optional, InjectionToken } from '@angular/core';
@Component({
  selector: 'se-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multi-app';
  showDyna = false;
  data = null;
  constructor() {
  }
  
  loadDynaData() {
    return {
      module: {
        name: 'pets',
        path: 'pets/src/lib'
      }
    }
  }
  
}
