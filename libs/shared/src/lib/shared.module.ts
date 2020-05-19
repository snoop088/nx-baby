import { NgModule, Compiler, CompilerFactory, COMPILER_OPTIONS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { API, apiConfig } from './api/api-config';
import { DynaLoaderComponent } from './dyna-loader/dyna-loader.component';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

export function createJitCompiler(compilerFactory: CompilerFactory): Compiler {
  return compilerFactory.createCompiler();
}
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [{
      provide: API,
      useValue: apiConfig
    },
    {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: createJitCompiler, deps: [CompilerFactory]}
    // { provide: Compiler, useClass: JitCompiler }
  ],
  exports: [
    DynaLoaderComponent
  ],
  declarations: [DynaLoaderComponent]
})
export class SharedModule { }
