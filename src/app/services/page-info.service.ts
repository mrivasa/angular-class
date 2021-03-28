import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PageInfo } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  info: PageInfo = {};
  loaded = false;

  constructor(private http: HttpClient) { 
    this
      .http
      .get('assets/data/page-data.json')
      .subscribe((resp: PageInfo) => {
        this.loaded = true;
        this.info = resp;
        console.log(resp);
      })

  }
}
