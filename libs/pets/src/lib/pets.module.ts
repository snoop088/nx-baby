import { NgModule, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynaModule } from '@se/shared';
import { PetsComponent } from './pets/pets.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PetsComponent],
  exports: [PetsComponent]
})
export class PetsModule implements DynaModule<any> {
  constructor(private resolver: ComponentFactoryResolver) {}
  public resolveDynaComponentFactory(): ComponentFactory<PetsComponent> {
    return this.resolver.resolveComponentFactory(PetsComponent);
  }
}
