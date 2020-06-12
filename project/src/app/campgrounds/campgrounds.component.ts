import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-campgrounds',
  templateUrl: './campgrounds.component.html',
  styleUrls: ['./campgrounds.component.css']
})
export class CampgroundsComponent implements OnInit {
  campgroundsArray = [];

  constructor(private service: SiteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      this.service.getCampgrounds(response.q).subscribe(campResponse => {
        this.campgroundsArray = campResponse.data;
        console.log(campResponse.data);
      })
    })
  }
};
