import { Component, OnInit, Injector, ɵcreateInjector as createInjector, Input, ViewChild, ViewContainerRef, AfterViewInit, Inject, Compiler, NgModule } from '@angular/core';
import { DynaData } from '../interfaces/dyna-data';
import { DynaModule } from '../interfaces/dyna-module';
@Component({
  selector: 'se-dyna-loader',
  templateUrl: './dyna-loader.component.html',
  styleUrls: ['./dyna-loader.component.css']
})
export class DynaLoaderComponent implements OnInit, AfterViewInit {

  @Input() data: DynaData;
  @ViewChild('viewContainer', { read: ViewContainerRef }) viewContainer: ViewContainerRef;
  @ViewChild('viewCompiled', { read: ViewContainerRef }) viewCompiled: ViewContainerRef;
  constructor(
    private injector: Injector,
    @Inject(Compiler) private compiler: Compiler
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    if (this.data) {
      this.createComponentFromModule(this.data.module.name, this.data.module.path);

    }
  }
  private createComponentFromModule(name: string, path: string) {
    // ../../../../pets/src/lib/pets.module
    import(`../../../../${path}/${name}.module`).then(cmp => {
      const cap = name.substr(0, 1).toLocaleUpperCase() + name.substr(1);
      const dynaModule: DynaModule<any> = createInjector(cmp[cap + 'Module'], this.injector).get(cmp[cap + 'Module']);
      const factory = dynaModule.resolveDynaComponentFactory();
      const compRef = this.viewContainer.createComponent(factory);
      this.compileFromFactory(dynaModule);
    });
  }
  private compileFromFactory(dynaModule: DynaModule<any>) {
    console.log(this.compiler);
    const dynaComponentClass = Component({
      template: '<p>this is my template here</p>{{ fromCmp }}',
      styles: ['p { color: red }']
    })(class Comp extends dynaModule.resolveDynaComponentFactory().componentType { })
    const dynaComponentModule = NgModule({ declarations: [dynaComponentClass] })(class {
    });
    this.compiler.compileModuleAndAllComponentsAsync(dynaComponentModule)
    .then((factories) => {
      const f = factories.componentFactories[0];
      const cmpRef = this.viewCompiled.createComponent(f);
    })

  }
  private loadWithSystem() {
    
  }

}
