import { Injectable } from '@angular/core';
import { AlbumItem } from "../models/album.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { }

	private itensCarrinhoSubject = new BehaviorSubject<AlbumItem[]>([]);
	public itensCarrinho$ = this.itensCarrinhoSubject.asObservable();

	public addItemCarrinho(item: AlbumItem): void {
		this.itensCarrinhoSubject.value.push(item);
	}

	public removeItemCarrinho(item: AlbumItem): void {
		const itemIndex = this.itensCarrinhoSubject.value.indexOf(item);
		this.itensCarrinhoSubject.value.splice(itemIndex, 1);
	}

	private setItemsCarrinho(items: AlbumItem[]): void {
		this.itensCarrinhoSubject.next(items);
	}

}
