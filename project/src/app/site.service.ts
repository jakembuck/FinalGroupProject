import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import lscache from 'lscache/lscache.min.js';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  parksURL: string = "https://developer.nps.gov/api/v1";
  parksEndpoint: string = `${this.parksURL}/parks`;
  parksKey: string = "uinpd79oZtZKa8hqkU4aZg2Udp09HZ0mH4wYaNT8";
  campgroundsEndpoint: string = `${this.parksURL}/campgrounds`;
  // thingsToDoEndpoint: string = `${this.parksURL}/thingstodo`;
  // alertsEndpoint: string = `${this.parksURL}/alerts`;
  geocodeURL: string = "https://maps.googleapis.com/maps/api/geocode/json";

  parkInfoPageArray: any = [];
  campgroundInfoPageArray: any = [];
  trailInfoPageArray: any = [];
  maxResults: any = 50;

  // hiking trails 
  hikingTrailsKey: string = "200802785-232f5acce6a2f23888902edffe9f1bcf";
  trailLocationUrl: string = "https://www.hikingproject.com/data/get-trails";

  expiration: number = 21600000;
  limit: any = 20;
  // lat: any;
  // lon: any;
  DefLatitude: any = 43.590926;
  DefLongitude: any = -84.716219;
  constructor(private http: HttpClient) { }



  getParks(campObj: any): any {
    let params: any = {}
    params.api_key = this.parksKey;
    params.limit = "50";
    if (campObj.q) {
      params.q = campObj.q
    }
    if (campObj.state) {
      params.stateCode = campObj.state
    }
    return this.http.get(this.parksEndpoint, {
      params: params
    });
  };
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
  getParkCampgrounds(campObj: any): any {
    let params: any = {}
    params.api_key = this.parksKey;
    params.limit = "50";
    if (campObj.q) {
      params.q = campObj.q
    }
    if (campObj.state) {
      params.stateCode = campObj.state
    }
    return this.http.get(this.campgroundsEndpoint, {
      params: params
    });
  };
  getDefaultCampgrounds(): any {
    return this.http.get(this.campgroundsEndpoint, {
      params: {
        api_key: this.parksKey,
        stateCode: "MI",
        limit: "50"
      }
    });
  };
  // getAlerts(q: string): any {
  //   return this.http.get(this.alertsEndpoint, {
  //     params: {
  //       q: q,
  //       api_key: this.parksKey
  //     }
  //   });
  // }
  // getThingsToDo(q: string): any {
  //   return this.http.get(this.thingsToDoEndpoint, {
  //     params: {
  //       q: q,
  //       api_key: this.parksKey
  //     }
  //   });
  // }
  getTrails(trailObj: any): any {
    console.log(trailObj);
    let params: any = {}
    params.key = this.hikingTrailsKey;
    params.maxResults = this.maxResults;
    if (trailObj.lat) {
      params.lat = trailObj.lat
    }
    if (trailObj.lng) {
      params.lon = trailObj.lng
    }
    console.log(params);
    return this.http.get(this.trailLocationUrl, {
      params: params
    });
    // return this.http.get(this.trailLocationUrl, {
    //   params: {
    //     key: this.hikingTrailsKey,
    //     lat: latitude,
    //     lon: longitude,
    //     maxResults: this.maxResults
    //   },
    // });
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

  getGeocode(q: string): any {
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
  getDefaultParks(): any {
    return this.http.get(this.parksEndpoint, {
      params: {
        api_key: this.parksKey,
        stateCode: "MI",
        limit: "50"
      }
    });
  };
  getCache(id: string): any {
    return lscache.get(id);
  }
  setCache(id: string, object: any, expiration: number = this.expiration): void {
    lscache.set(id, object, expiration);
  }
}
