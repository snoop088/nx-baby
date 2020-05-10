import { async, TestBed } from '@angular/core/testing';
import { PetsModule } from './pets.module';

describe('PetsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PetsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PetsModule).toBeDefined();
  });
});
