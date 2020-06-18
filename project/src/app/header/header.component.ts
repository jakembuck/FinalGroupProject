import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: SiteService) { }

  ngOnInit(): void {
  }

  getDefaultTrails() {
    this.service.getDefaultTrails();
  }

}
