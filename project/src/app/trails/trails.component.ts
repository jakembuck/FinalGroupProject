import { Component, OnInit, ViewChild } from '@angular/core';
import { SiteService } from '../site.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.css']
})
export class TrailsComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  trailsArray = [];
  trailsLat: any;
  trailsLon: any;
  parksList: any = [];
  parkInfoPageArray: any = [];
  data: any;
  zoom: any;
  center: any;
  markers: any = [];
  title: any;
  lat: any = null;
  lon: any = null;
  label: any;
  infoContent: any;


  states: any[] = [
    {
      name: "Alabama",
      sc: "AL"
    },
    {
      name: "Alaska",
      sc: "AK"
    },
    {
      name: "American Samoa",
      sc: "AS"
    },
    {
      name: "Arizona",
      sc: "AZ"
    },
    {
      name: "Arkansas",
      sc: "AR"
    },
    {
      name: "California",
      sc: "CA"
    },
    {
      name: "Colorado",
      sc: "CO"
    },
    {
      name: "Connecticut",
      sc: "CT"
    },
    {
      name: "Delaware",
      sc: "DE"
    },
    {
      name: "District Of Columbia",
      sc: "DC"
    },
    {
      name: "Federated States Of Micronesia",
      sc: "FM"
    },
    {
      name: "Florida",
      sc: "FL"
    },
    {
      name: "Georgia",
      sc: "GA"
    },
    {
      name: "Guam",
      sc: "GU"
    },
    {
      name: "Hawaii",
      sc: "HI"
    },
    {
      name: "Idaho",
      sc: "ID"
    },
    {
      name: "Illinois",
      sc: "IL"
    },
    {
      name: "Indiana",
      sc: "IN"
    },
    {
      name: "Iowa",
      sc: "IA"
    },
    {
      name: "Kansas",
      sc: "KS"
    },
    {
      name: "Kentucky",
      sc: "KY"
    },
    {
      name: "Louisiana",
      sc: "LA"
    },
    {
      name: "Maine",
      sc: "ME"
    },
    {
      name: "Marshall Islands",
      sc: "MH"
    },
    {
      name: "Maryland",
      sc: "MD"
    },
    {
      name: "Massachusetts",
      sc: "MA"
    },
    {
      name: "Michigan",
      sc: "MI"
    },
    {
      name: "Minnesota",
      sc: "MN"
    },
    {
      name: "Mississippi",
      sc: "MS"
    },
    {
      name: "Missouri",
      sc: "MO"
    },
    {
      name: "Montana",
      sc: "MT"
    },
    {
      name: "Nebraska",
      sc: "NE"
    },
    {
      name: "Nevada",
      sc: "NV"
    },
    {
      name: "New Hampshire",
      sc: "NH"
    },
    {
      name: "New Jersey",
      sc: "NJ"
    },
    {
      name: "New Mexico",
      sc: "NM"
    },
    {
      name: "New York",
      sc: "NY"
    },
    {
      name: "North Carolina",
      sc: "NC"
    },
    {
      name: "North Dakota",
      sc: "ND"
    },
    {
      name: "Northern Mariana Islands",
      sc: "MP"
    },
    {
      name: "Ohio",
      sc: "OH"
    },
    {
      name: "Oklahoma",
      sc: "OK"
    },
    {
      name: "Oregon",
      sc: "OR"
    },
    {
      name: "Palau",
      sc: "PW"
    },
    {
      name: "Pennsylvania",
      sc: "PA"
    },
    {
      name: "Puerto Rico",
      sc: "PR"
    },
    {
      name: "Rhode Island",
      sc: "RI"
    },
    {
      name: "South Carolina",
      sc: "SC"
    },
    {
      name: "South Dakota",
      sc: "SD"
    },
    {
      name: "Tennessee",
      sc: "TN"
    },
    {
      name: "Texas",
      sc: "TX"
    },
    {
      name: "Utah",
      sc: "UT"
    },
    {
      name: "Vermont",
      sc: "VT"
    },
    {
      name: "Virgin Islands",
      sc: "VI"
    },
    {
      name: "Virginia",
      sc: "VA"
    },
    {
      name: "Washington",
      sc: "WA"
    },
    {
      name: "West Virginia",
      sc: "WV"
    },
    {
      name: "Wisconsin",
      sc: "WI"
    },
    {
      name: "Wyoming",
      sc: "WY"
    }
  ];

  constructor(private service: SiteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      if (response.lon && response.lat) {
        this.service.getTrails(response.lat, response.lon).subscribe(response => {
          this.trailsArray = response.trails;
        })
      } else {
        this.service.getDefaultTrails().subscribe(response => {
          this.trailsArray = response.trails;
        });
      }
    })
    // this.service.getDefaultTrails().subscribe(response => {
    //   this.trailsArray = response.trails;
    // });
    // this.getParkTrails(this.lat, this.lon);
    // console.log(longitude);
    // let keyTerm: string = null;
    // let stateObj: any = null
    // if (response.q && response.state) {
    //   stateObj = this.states.find(state => {
    //     return state.sc === response.state
    //   })
    //   keyTerm = `${response.q} ${stateObj.name}`
    // } else if (response.q) {
    //   keyTerm = response.q
    // } else if (response.state) {
    //   stateObj = this.states.find(state => {
    //     return state.sc === response.state
    //   })
    //   keyTerm = stateObj.name
    // } else if (response.q == null && response.state == null) {
    //   keyTerm = ""
    // }
    // this.service.getGeocode(keyTerm).subscribe(response => {
    //   console.log(response.results[0].geometry.location)
    //   this.center = new google.maps.LatLng({
    //     lat: response.results[0].geometry.location.lat,
    //     lng: response.results[0].geometry.location.lng
    //   });
    // });
    // this.service.getParks(response.q, response.state).subscribe(response => {
    //   this.parksList = response.data;
    // });

    // this.service.getTrails(this.lat, this.lon).subscribe(response => {
    //   this.trailsArray = response.trails;
    //   console.log(this.trailsArray);
    //   this.markers = [];
    //   this.route.queryParams.subscribe(response => {
    //     console.log(response)
    //     this.zoom = 6;
    //     this.parkInfoPageArray = this.service.parkInfoPageArray;

    //     // console.log(this.parkInfoPageArray);
    //     this.lat = this.parkInfoPageArray[0].latitude;
    //     // console.log(this.lat);
    //     this.lon = this.parkInfoPageArray[0].longitude;
    //     // this.trailsArray.forEach(trail => {
    //     //   console.log(trail);
    //     //   this.markers.push({
    //     //     info: { title: trail.name },
    //     //     position: new google.maps.LatLng({
    //     //       lat: Number(trail.latitude),
    //     //       lng: Number(trail.longitude)
    //     //     })
    //     //   })
    //     // });
    //   })
    // });
  };




  addToTrailInfo(trail): any {
    trail.isclicked === true
    this.service.addToTrailInfo(trail)
  }
  openInfo(marker: MapMarker, content: any) {
    this.infoContent = content;
    console.log(marker, content);
    this.info.open(marker)
  }

  // getParkTrails(lat, lon) {
  //   if (this.parkInfoPageArray) {
  //     this.parkInfoPageArray = this.service.parkInfoPageArray;
  //     lat = this.parkInfoPageArray[0].latitude;
  //     console.log(this.parkInfoPageArray[0].latitude);
  //     lon = this.parkInfoPageArray[0].longitude;
  //     this.service.getTrails(lat, lon).subscribe(response => {
  //       this.trailsArray = response.trails

  //     })
  //   }
  //   else {
  //     this.parkInfoPageArray = [];
  //   }
  // }
};

