import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CancionesService {
  public urlApi: string;
  constructor(
    public http: Http
  ) {
    this.urlApi = "https://api.deezer.com/";

  }

  traerCanciones(){
    return this.http.get(this.urlApi + "playlist/93489551/tracks")
      .map( res => res.json() )
  }

}

