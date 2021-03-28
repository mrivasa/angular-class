import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PageInfo, Team } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  info: PageInfo = {};
  loaded = false;
  team: any[] = []

  constructor(private http: HttpClient) { 
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    this
      .http
      .get('assets/data/page-data.json')
      .subscribe((resp: PageInfo) => {
        this.loaded = true;
        this.info = resp;
      });
  }

  private loadTeam() {
    var url = this.info.teamDbUrl!;
    this
      .http
      .get('https://angular-class-851c2-default-rtdb.firebaseio.com/Team.json')
      //.get(url)
      .subscribe((resp: any) => {
          this.team = resp;
      });
  }
}
