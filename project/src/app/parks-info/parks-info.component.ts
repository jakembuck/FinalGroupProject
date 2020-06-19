import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-parks-info',
  templateUrl: './parks-info.component.html',
  styleUrls: ['./parks-info.component.css']
})
export class ParksInfoComponent implements OnInit {
  parkInfoPageArray: any = [];
  // thingsToDoArray: any = [];
  // alertsArray: any = [];
  constructor(private service: SiteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.parkInfoPageArray = this.service.getParkInfoArray();
    // console.log(this.parkInfoPageArray)
    //   this.route.queryParams.subscribe(response => {
    //     console.log(response.q)
    //     this.service.getParks(response.q, response.state).subscribe(parksResponse => {
    //       this.parksInfoArray = parksResponse.data;
    //       console.log(parksResponse.data);
    //     });

    //   });
    //   this.route.queryParams.subscribe(response => {
    //     this.service.getThingsToDo(response.q).subscribe(thingsToDoResponse => {
    //       this.thingsToDoArray = thingsToDoResponse.data;
    //       console.log(thingsToDoResponse.data);
    //     });
    //   });

    //   this.route.queryParams.subscribe(response => {
    //     this.service.getAlerts(response.q).subscribe(alertsResponse => {
    //       this.alertsArray = alertsResponse.data;
    //       console.log(alertsResponse.data);
    //     });
    //   });
  }

  getParkTrails(parkInfo: any) {
    console.log(parkInfo);
    this.router.navigate(["/trails"], {
      queryParams: {
        q: parkInfo.name,
        state: parkInfo.addresses[0].stateCode
      }
    })
  }

  getParkCampgrounds(parkInfo: any) {
    console.log(parkInfo.name, parkInfo.addresses[0].stateCode);
    this.router.navigate(["/campgrounds"], {
      queryParams: {
        q: parkInfo.name,
        state: parkInfo.addresses[0].stateCode
      }
    })
  }

};
