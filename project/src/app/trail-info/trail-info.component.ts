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
    // this.route.queryParams.subscribe(response => {
    //   this.service.getparks(response.q, response.sc).subscribe(campResponse => {
    //     this.parksArray = campResponse.data;
    //     console.log(campResponse.data);
    //   })
    // })
    // this.getDefaultParks()
    // this.route.queryParams.subscribe(response => {
    //   console.log(response)
    //   this.zoom = 4;
    //   let keyTerm: string = null;
    //   let stateObj: any = null
    //   if (response.q && response.state) {
    //     stateObj = this.states.find(state => {
    //       return state.sc === response.state
    //     })
    //     keyTerm = `${response.q} ${stateObj.name}`
    //   } else if (response.q) {
    //     keyTerm = response.q
    //   } else if (response.state) {
    //     stateObj = this.states.find(state => {
    //       return state.sc === response.state
    //     })
    //     keyTerm = stateObj.name
    //   } else if (response.q == null && response.state == null) {
    //     keyTerm = ""
    //   }
    //   this.service.getGeocode(keyTerm).subscribe(response => {
    //     console.log(response.results[0].geometry.location)
    //     this.center = new google.maps.LatLng({
    //       lat: response.results[0].geometry.location.lat,
    //       lng: response.results[0].geometry.location.lng
    //     });
    //   });
    //   this.service.getParks(response.q, response.state).subscribe(response => {
    //     this.parksArray = response.data;
    //     console.log(this.parksArray);
    //     this.markers = [];
    //     this.parksArray.forEach(park => {
    //       console.log(park);
    //       this.markers.push({
    //         info: { title: park.name },
    //         position: new google.maps.LatLng({
    //           lat: Number(park.latitude),
    //           lng: Number(park.longitude)
    //         })
    //       })
    //     });
    //   })
    // });
  };




  // openInfo(marker: MapMarker, content: any) {
  //   this.infoContent = content;
  //   console.log(marker, content);
  //   this.info.open(marker)
  // }
};
