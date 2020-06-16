import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampgroundInfoComponent } from './campground-info.component';

describe('CampgroundInfoComponent', () => {
  let component: CampgroundInfoComponent;
  let fixture: ComponentFixture<CampgroundInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampgroundInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampgroundInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
