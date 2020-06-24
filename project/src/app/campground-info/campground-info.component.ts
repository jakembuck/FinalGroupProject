import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-campground-info',
  templateUrl: './campground-info.component.html',
  styleUrls: ['./campground-info.component.css']
})
export class CampgroundInfoComponent implements OnInit {
  campgroundInfoPageArray: any = [];

  constructor(private service: SiteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.campgroundInfoPageArray = this.service.getCampgroundInfoArray();
  }
  convertToNumber(string: string) {
    let integer = parseInt(string).toFixed(2);
    return integer;
  }

}
