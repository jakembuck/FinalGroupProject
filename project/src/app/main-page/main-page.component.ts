import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  parksList: any = [];
  activitiesList: any = [];
  imageArray: any = [];
  data: any;
  campgroundsArray: any = [];
  // latitude: string = "";
  // longitude: string = "";
  states: string[] = [
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
    'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
    'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
    'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
    'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  constructor(private service: SiteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.route.queryParams.subscribe(response => {
    //   this.service.getCampgrounds(response.q).subscribe(campResponse => {
    //     this.campgroundsArray = campResponse.data;
    //     console.log(campResponse.data);
    //   })
    // })
  };



  submitForm(form: NgForm) {
    console.log(form.value)
    this.router.navigate(["/search-list"], {
      queryParams: {
        q: form.value.search,
        state: form.value.stateSearch
      }
    })


  }

  getTrails(park): any {
    this.service.getTrails(park.latitude, park.longitude).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

}
