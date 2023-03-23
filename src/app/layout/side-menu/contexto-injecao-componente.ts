import { ComponentFactoryResolver, Injector } from '@angular/core';

export interface ContextoInjecaoComponente {
  resolver: ComponentFactoryResolver;
  injector: Injector;
  componenteParaInjetar: any;
}
