import { ComponentFactory } from '@angular/core';

export interface DynaModule<T> {
    resolveDynaComponentFactory(): ComponentFactory<T>
}