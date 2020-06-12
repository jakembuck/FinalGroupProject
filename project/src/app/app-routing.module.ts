import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchListComponent } from './search-list/search-list.component';
import { CampgroundsComponent } from './campgrounds/campgrounds.component';
import { ParksInfoComponent } from './parks-info/parks-info.component';


const routes: Routes = [
  { path: "main-page", component: MainPageComponent },
  { path: "search-list", component: SearchListComponent },
  { path: "parks-info", component: ParksInfoComponent },
  { path: "campgrounds", component: CampgroundsComponent },
  { path: "", redirectTo: "/main-page", pathMatch: "full" },
  { path: "**", redirectTo: "/main-page", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
