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
		return this.http.get<AlbumItem[]>(this.ALBUM_API_URL);
	}

}
