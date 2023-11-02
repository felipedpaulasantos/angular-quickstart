import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[modalBodyHost]'
})
export class CxModalDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}