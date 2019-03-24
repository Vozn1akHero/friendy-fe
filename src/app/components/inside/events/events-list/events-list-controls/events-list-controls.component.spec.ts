import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListControlsComponent } from './events-list-controls.component';

describe('EventsListControlsComponent', () => {
  let component: EventsListControlsComponent;
  let fixture: ComponentFixture<EventsListControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
