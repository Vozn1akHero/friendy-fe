import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUpcomingEventsItemComponent } from './home-upcoming-events-item.component';

describe('HomeUpcomingEventsItemComponent', () => {
  let component: HomeUpcomingEventsItemComponent;
  let fixture: ComponentFixture<HomeUpcomingEventsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUpcomingEventsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUpcomingEventsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
