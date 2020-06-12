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

  // hiking trails 
  hikingTrailsKey: string = "3e1877e5e4mshd270349f25b06efp1cfa54jsn5f52b35449be";
  trailLocationUrl: string = "https://trailapi-trailapi.p.rapidapi.com/trails/explore/";
  trailApiHost: string = "trailapi-trailapi.p.rapidapi.com";
  // lat: any;
  // lon: any;
  constructor(private http: HttpClient) { }



  getParks(q: string): any {
    return this.http.get(this.parksEndpoint, {
      params: {
        q: q,
        api_key: this.parksKey
      }
    });
  }
  getCampgrounds(q: string): any {
    return this.http.get(this.campgroundsEndpoint, {
      params: {
        q: q,
        api_key: this.parksKey
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


}
