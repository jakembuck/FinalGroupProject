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
  constructor(private service: SiteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.parkInfoPageArray = this.service.getParkInfoArray();

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
  convertToNumber(string: string) {
    let integer = parseInt(string).toFixed(2);
    return integer;
  }
};
