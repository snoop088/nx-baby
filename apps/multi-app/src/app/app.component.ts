import { Component, Inject, forwardRef, Optional, InjectionToken } from '@angular/core';
@Component({
  selector: 'se-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }
  title = 'multi-app';
}
