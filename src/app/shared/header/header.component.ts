import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageInfoService } from 'src/app/services/page-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _infoService: PageInfoService,
               private router: Router) { }

  ngOnInit(): void {
  }

  searchProduct(criteria: string){

    if(criteria.length < 1){
      return;
    }
    this.router.navigate(['/search', criteria]);

  }

}
