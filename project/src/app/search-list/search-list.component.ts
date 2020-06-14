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

  constructor(private service: SiteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      console.log(response.q)
      this.service.getGeocode(response.q).subscribe(response => {
        console.log(response.results[0].geometry.location)
        this.center = new google.maps.LatLng({
          lat: response.results[0].geometry.location.lat,
          lng: response.results[0].geometry.location.lng
        });

      })
      this.service.getParks(response.q).subscribe(response => {
        this.parksList = response.data;
        console.log(response.data[0]);
      })

    })
  }

  submitForm(form: NgForm) {
    console.log(form.value)
    this.router.navigate(["/search-list"], {
      queryParams: {
        q: form.value.search
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
