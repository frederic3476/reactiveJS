import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 
import { Photo } from './photo';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

@Injectable()
export class PhotoService {

  private url: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: Http) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get(this.url)
      .map((res: Response) => res.json() as Photo[])
      .do((photo) => { if (photo[0].id<10) console.log(photo) }) ;
  }

  getPhoto(id: Number):Observable<Photo> {
    return this.http.get(this.url + '/' + id)
      .map((res: Response) => res.json() as Photo);
  }
}
