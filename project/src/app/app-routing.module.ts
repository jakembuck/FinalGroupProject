import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchListComponent } from './search-list/search-list.component';
import { CampgroundsComponent } from './campgrounds/campgrounds.component';
import { ParksInfoComponent } from './parks-info/parks-info.component';
import { TrailsComponent } from './trails/trails.component';
import { CampgroundInfoComponent } from './campground-info/campground-info.component';
import { ParksComponent } from './parks/parks.component';


const routes: Routes = [
  { path: "main-page", component: MainPageComponent },
  { path: "search-list", component: SearchListComponent },
  { path: "park-info", component: ParksInfoComponent },
  { path: "parks", component: ParksComponent },
  { path: "campgrounds", component: CampgroundsComponent },
  { path: "campground-info", component: CampgroundInfoComponent },
  { path: "trails", component: TrailsComponent },
  { path: "", redirectTo: "/main-page", pathMatch: "full" },
  { path: "**", redirectTo: "/main-page", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
