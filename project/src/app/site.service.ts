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

  // hiking trails 
  hikingTrailsKey: string = "3e1877e5e4mshd270349f25b06efp1cfa54jsn5f52b35449be";
  trailLocationUrl: string = "https://trailapi-trailapi.p.rapidapi.com/trails/explore/";
  trailApiHost: string = "trailapi-trailapi.p.rapidapi.com";
  limit: any = 20;
  // lat: any;
  // lon: any;
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
        // api_key: this.apiKey,
        lat: latitude,
        lon: longitude
      },

      headers: {
        'x-rapidapi-key': this.hikingTrailsKey,
        'x-rapidapi-host': this.trailApiHost
      }

    });

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

  getParkInfoArray(): any {
    return this.parkInfoPageArray
  }

  getCampgroundInfoArray(): any {
    return this.campgroundInfoPageArray
  }

}
