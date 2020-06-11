import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  parksURL: string = "https://developer.nps.gov/api/v1";
  parksEndpoint: string = `${this.parksURL}/parks`;
  parksKey: string = "uinpd79oZtZKa8hqkU4aZg2Udp09HZ0mH4wYaNT8";
  constructor(private http: HttpClient) { }

  getActivities(q: string): any {
    return this.http.get(this.parksEndpoint, {
      params: {
        q: q,
        api_key: this.parksKey
      }
    });
  }
}
