import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { AlbumItem } from "../models/album.model";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

private ALBUM_API_URL = environment.ALBUM_API;

	constructor(
		private http: HttpClient
	) { }

	public consultaApiAlbum(): Observable<AlbumItem[]> {
		const url = `${this.ALBUM_API_URL}`;
		return this.http.get<AlbumItem[]>(
			url,
			{ headers: { 'Content-type': 'application/json; charset=UTF-8' } }
		);
	}

}
