import { TemplateRef, ViewContainerRef } from '@angular/core';

export interface DynaData {
    module: {
        name: string,
        path: string
    };
    view?: {
        template: TemplateRef<ViewContainerRef>,
        context: {}
    }
}