import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  parksList: any = [];
  data: any;
  zoom: 1;
  center: any;
  states: string[] = [
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
    'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
    'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
    'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
    'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  constructor(private service: SiteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      console.log(response)
      // this.service.getGeocode(response.q).subscribe(response => {
      //   console.log(response.results[0].geometry.location)
      //   this.center = new google.maps.LatLng({
      //     lat: response.results[0].geometry.location.lat,
      //     lng: response.results[0].geometry.location.lng
      //   });

      // })

      this.service.getParks(response.q, response.state).subscribe(response => {
        this.parksList = response.data;
        console.log(response)
      })
    })
  }

  submitForm(form: NgForm) {
    console.log(form.value)
    this.router.navigate(["/search-list"], {
      queryParams: {
        // can change name of state and "q"
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
