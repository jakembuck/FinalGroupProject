import { Component, OnInit, ViewChild } from '@angular/core';
import { SiteService } from '../site.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-trail-info',
  templateUrl: './trail-info.component.html',
  styleUrls: ['./trail-info.component.css']
})
export class TrailInfoComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  trailInfoPageArray: any = [];
  // data: any;
  // zoom: any;
  // center: any;
  // markers: any = [];
  // title: any;
  // label: any;
  // infoContent: any;


  constructor(private service: SiteService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.trailInfoPageArray = this.service.getTrailInfoArray();
    console.log(this.trailInfoPageArray);
  };
};
