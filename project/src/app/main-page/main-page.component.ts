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


  constructor(private service: SiteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      console.log(response.q)
      this.service.getActivities(response.q).subscribe(response => {
        this.parksList = response.data;
        this.activitiesList = response.data.activities;
        console.log(response);
        // console.log(response.data.activities.name)
      })
    })
  };


  submitForm(form: NgForm) {
    console.log(form.value)
    this.router.navigate(["/main-page"], {
      queryParams: {
        q: form.value.search
      }
    })


  }
}
