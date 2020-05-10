import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynaLoaderComponent } from './dyna-loader.component';

describe('DynaLoaderComponent', () => {
  let component: DynaLoaderComponent;
  let fixture: ComponentFixture<DynaLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynaLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynaLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
