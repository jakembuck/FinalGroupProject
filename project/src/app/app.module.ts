import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchListComponent } from './search-list/search-list.component';
import { CampgroundsComponent } from './campgrounds/campgrounds.component';
import { ParksInfoComponent } from './parks-info/parks-info.component';
import { TrailsComponent } from './trails/trails.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SearchFormComponent } from './search-form/search-form.component';
import { CampgroundInfoComponent } from './campground-info/campground-info.component';
import { TrailInfoComponent } from './trail-info/trail-info.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SearchListComponent,
    CampgroundsComponent,
    ParksInfoComponent,
    TrailsComponent,
    SearchFormComponent,
    CampgroundInfoComponent,
    TrailInfoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
