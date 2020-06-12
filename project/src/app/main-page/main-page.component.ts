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


  constructor(private service: SiteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      console.log(response.q)
      this.service.getParks(response.q).subscribe(response => {
        this.parksList = response.data;
        // this.activitiesList = response.data.activities;
        console.log(response.data[0]);
      })

    })
    // this.route.queryParams.subscribe(response => {
    //   this.service.getCampgrounds(response.q).subscribe(campResponse => {
    //     this.campgroundsArray = campResponse.data;
    //     console.log(campResponse.data);
    //   })
    // })
  };



  submitForm(form: NgForm) {
    console.log(form.value)
    this.router.navigate(["/main-page"], {
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
