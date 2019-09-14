import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUpcomingEventsComponent } from './home-upcoming-events.component';

describe('HomeUpcomingEventsComponent', () => {
  let component: HomeUpcomingEventsComponent;
  let fixture: ComponentFixture<HomeUpcomingEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUpcomingEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUpcomingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
