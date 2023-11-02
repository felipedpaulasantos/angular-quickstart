import { Injectable, EventEmitter, Output, ComponentFactoryResolver, Injector, ComponentRef, Component, Type } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { ContextoInjecaoComponente } from "src/app/layout/side-menu/contexto-injecao-componente";
import { ModalOptions } from "../components/modal/modal-options";

declare var $;

export interface ComponenteParaInjetar {
  componente: Type<any>,
  data?: any
}

@Injectable({
  providedIn: "root"
})
export class ModalService {

  private limparModalDinamicoSource = new BehaviorSubject<boolean>(false);
  limparModalDinamico$ = this.limparModalDinamicoSource.asObservable();

  private injetarModalDinamicoSource = new BehaviorSubject<ComponenteParaInjetar>(null);
  injetarModalDinamico$ = this.injetarModalDinamicoSource.asObservable();

  showEvent: EventEmitter<any> = new EventEmitter();

  btOKEvent: EventEmitter<boolean> = new EventEmitter();

  btCancelarEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  public show(options?: ModalOptions) {
    this.showEvent.emit(options || {});
  }

  public limpar(): void {
    this.limparModalDinamicoSource.next(true);
    this.limparModalDinamicoSource.next(false);
  }

  public injetar(componenteParaInjetar: ComponenteParaInjetar): void {
    this.injetarModalDinamicoSource.next(componenteParaInjetar);
  }

}