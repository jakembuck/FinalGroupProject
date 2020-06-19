import { Component, OnInit, ViewChild } from '@angular/core';
import { SiteService } from '../site.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-campgrounds',
  templateUrl: './campgrounds.component.html',
  styleUrls: ['./campgrounds.component.css']
})
export class CampgroundsComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  campgroundsArray = [];
  data: any;
  zoom: any;
  center: any;
  markers: any = [];
  title: any;
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
    // this.route.queryParams.subscribe(response => {
    //   this.service.getCampgrounds(response.q, response.sc).subscribe(campResponse => {
    //     this.campgroundsArray = campResponse.data;
    //     console.log(campResponse.data);
    //   })
    // })
    // this.getDefaultCampgrounds();
    this.route.queryParams.subscribe(response => {
      console.log(response)
      this.zoom = 6;
      let keyTerm: string = null;
      let stateObj: any = null
      if (response.q && response.state) {
        stateObj = this.states.find(state => {
          return state.sc === response.state
        })
        keyTerm = `${response.q} ${stateObj.name}`
        this.service.getGeocode(keyTerm).subscribe(response => {
          console.log(response.results[0].geometry.location)
          this.center = new google.maps.LatLng({
            lat: response.results[0].geometry.location.lat,
            lng: response.results[0].geometry.location.lng
          });
        });
        // all the stuff related to q & sc
        this.service.getParkCampgrounds(response).subscribe(response => {
          this.campgroundsArray = response.data;
          console.log(this.campgroundsArray);
          this.markers = [];
          this.campgroundsArray.forEach(campground => {
            console.log(campground);
            this.markers.push({
              info: { title: campground.name },
              position: new google.maps.LatLng({
                lat: Number(campground.latitude),
                lng: Number(campground.longitude)
              })
            })
          });
        })
      } else if (response.q) {
        this.service.getGeocode(response.q).subscribe(response => {
          this.center = new google.maps.LatLng({
            lat: response.results[0].geometry.location.lat,
            lng: response.results[0].geometry.location.lng
          });
        })
      } else if (response.sc) {
        stateObj = this.states.find(state => {
          return state.sc === response.state
        })
        keyTerm = stateObj.name
      } else if (!response.q && !response.sc) {
        keyTerm = "mt.pleasant, Michigan"
        this.service.getGeocode(keyTerm).subscribe(response => {
          console.log(response.results[0].geometry.location)
          this.center = new google.maps.LatLng({
            lat: response.results[0].geometry.location.lat,
            lng: response.results[0].geometry.location.lng
          });
        });
        console.log("happened");
        this.getDefaultCampgrounds()
      }

      //GET CAMPSITE WILL WORK IF RESPONSE.SC
      if (response.q && response.sc) {
      } else {
        this.service.getCampgrounds(response.q, response.state).subscribe(response => {
          this.campgroundsArray = response.data;
          console.log(this.campgroundsArray);
          this.markers = [];
          this.campgroundsArray.forEach(campground => {
            console.log(campground);
            this.markers.push({
              info: { title: campground.name },
              position: new google.maps.LatLng({
                lat: Number(campground.latitude),
                lng: Number(campground.longitude)
              })
            })
          });
        })
      }
    });
  };

  getDefaultCampgrounds() {
    this.service.getDefaultCampgrounds().subscribe(response => {
      this.campgroundsArray = response.data;
      this.markers = [];
      this.campgroundsArray.forEach(campground => {
        console.log(campground);
        this.markers.push({
          info: { title: campground.name },
          position: new google.maps.LatLng({
            lat: Number(campground.latitude),
            lng: Number(campground.longitude)
          })
        })
      });

    })
  }

  addToCampgroundInfo(campground): any {
    campground.isclicked === true
    this.service.addToCampgroundInfo(campground)
  }

  openInfo(marker: MapMarker, content: any) {
    this.infoContent = content;
    console.log(marker, content);
    this.info.open(marker)
  }
};
