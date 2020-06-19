import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  parksURL: string = "https://developer.nps.gov/api/v1";
  parksEndpoint: string = `${this.parksURL}/parks`;
  parksKey: string = "uinpd79oZtZKa8hqkU4aZg2Udp09HZ0mH4wYaNT8";
  campgroundsEndpoint: string = `${this.parksURL}/campgrounds`;
  thingsToDoEndpoint: string = `${this.parksURL}/thingstodo`;
  alertsEndpoint: string = `${this.parksURL}/alerts`;
  geocodeURL: string = "https://maps.googleapis.com/maps/api/geocode/json";

  parkInfoPageArray: any = [];
  campgroundInfoPageArray: any = [];
  trailInfoPageArray: any = [];
  maxResults: any = 50;

  // hiking trails 
  hikingTrailsKey: string = "200802785-232f5acce6a2f23888902edffe9f1bcf";
  trailLocationUrl: string = "https://www.hikingproject.com/data/get-trails";

  limit: any = 20;
  // lat: any;
  // lon: any;
  DefLatitude: any = 43.590926;
  DefLongitude: any = -84.716219;
  constructor(private http: HttpClient) { }



  getParks(q: string, sc: string): any {
    return this.http.get(this.parksEndpoint, {
      params: {
        q: q,
        api_key: this.parksKey,
        stateCode: sc,
        limit: this.limit
      }
    });
  }
  getCampgrounds(q: string, sc: string): any {
    return this.http.get(this.campgroundsEndpoint, {
      params: {
        q: q,
        api_key: this.parksKey,
        stateCode: sc,
        limit: this.limit
      }
    });
  };
  getParkCampgrounds(q: string, sc: string): any {
    return this.http.get(this.campgroundsEndpoint, {
      params: {
        q: q,
        api_key: this.parksKey,
        stateCode: sc,
        limit: this.limit
      }
    });
  };
  getDefaultCampgrounds(): any {
    return this.http.get(this.campgroundsEndpoint, {
      params: {
        api_key: this.parksKey,
        stateCode: "MI",
        limit: "200"
      }
    });
  };
  getAlerts(q: string): any {
    return this.http.get(this.alertsEndpoint, {
      params: {
        q: q,
        api_key: this.parksKey
      }
    });
  }
  getThingsToDo(q: string): any {
    return this.http.get(this.thingsToDoEndpoint, {
      params: {
        q: q,
        api_key: this.parksKey
      }
    });
  }
  getTrails(latitude: any, longitude: any): any {
    return this.http.get(this.trailLocationUrl, {
      params: {
        key: this.hikingTrailsKey,
        lat: latitude,
        lon: longitude,
        maxResults: this.maxResults
      },
    });
  }
  getDefaultTrails(): any {
    return this.http.get(this.trailLocationUrl, {
      params: {
        key: this.hikingTrailsKey,
        lat: this.DefLatitude,
        lon: this.DefLongitude,
        maxResults: this.maxResults
      }
    })
  }

  getGeocode(q: any): any {
    return this.http.get(this.geocodeURL, {
      params: {
        address: q,
        key: "AIzaSyDP2PbJZxnFGfqtVYvkswJ-7N56LMyLqN0"
      }
    })
  }
  addToParkInfo(park: any): any {
    this.parkInfoPageArray = [];
    this.parkInfoPageArray.push(park)
    // console.log(this.parkInfoPageArray)
  }
  addToCampgroundInfo(campground: any): any {
    this.campgroundInfoPageArray = [];
    this.campgroundInfoPageArray.push(campground)
    // console.log(this.parkInfoPageArray)
  }
  addToTrailInfo(trail: any): any {
    this.trailInfoPageArray = [];
    this.trailInfoPageArray.push(trail)
    // console.log(this.parkInfoPageArray)
  }
  getTrailInfoArray(): any {
    return this.trailInfoPageArray
  }
  getParkInfoArray(): any {
    return this.parkInfoPageArray
  }
  getCampgroundInfoArray(): any {
    return this.campgroundInfoPageArray
  }

}
