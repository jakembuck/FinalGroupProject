import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';
import { element } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {


  hidden: boolean = true;

  constructor(private service: SiteService) { }

  ngOnInit(): void {
  }

  getDefaultTrails() {
    this.service.getDefaultTrails();
  }

  toggleClass() {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }

}
