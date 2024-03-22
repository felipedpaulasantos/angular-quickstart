import { Injectable } from '@angular/core';
import { AlbumItem } from "../models/album.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { }

	private itemsCarrinhoSubject = new BehaviorSubject<AlbumItem[]>([]);
	public itemsCarrinho$ = this.itemsCarrinhoSubject.asObservable();

	public addItemCarrinho(item: AlbumItem): void {
		this.itemsCarrinhoSubject.value.push(item);
	}

	public removeItemCarrinho(item: AlbumItem): void {
		const itemIndex = this.itemsCarrinhoSubject.value.indexOf(item);
		this.itemsCarrinhoSubject.value.splice(itemIndex, 1);
	}

	private setItemsCarrinho(items: AlbumItem[]): void {
		this.itemsCarrinhoSubject.next(items);
	}

}
