import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParksInfoComponent } from './parks-info.component';

describe('ParksInfoComponent', () => {
  let component: ParksInfoComponent;
  let fixture: ComponentFixture<ParksInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParksInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParksInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
