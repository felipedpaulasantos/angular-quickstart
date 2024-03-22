import { StyleService } from './../../service/style.service';
import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { LoadingService } from "../../service/loading.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-loading-caixa",
  templateUrl: "./loading-caixa.component.html",
  styleUrls: ["./loading-caixa.component.scss"]
})
export class LoadingCaixaComponent implements OnInit, OnDestroy {

  @Input()
  name: string = "";

  @Input()
  isAutomatico: boolean = true;

  public isLoading: boolean = true;
  private subscription = new Subscription();
  public imgSrc;

  constructor(
    private loadingService: LoadingService,
    private cdr: ChangeDetectorRef,
    private styleService: StyleService
  ) {
    if (this.isAutomatico === true) this.observaIsLoading();
    this.loadingService.pushToLoadingComponents(this);
    this.imgSrc = this.styleService.getLogoPrincipalGifSrc();
  }

  ngOnInit() {
  }

  private observaIsLoading(): void {
    this.subscription.add(
      this.loadingService.isLoading$.subscribe(isLoading => {
        this.isLoading = isLoading;
        this.atualizaTela();
      })
    );
  }

  public show(): void {
    this.isLoading = true;
    this.atualizaTela();
  }

  public hide(): void {
    this.isLoading = true;
    this.atualizaTela();
  }

  public atualizaTela(): void {
    this.cdr.markForCheck();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.loadingService.popFromLoadingComponents(this);
  }

}
