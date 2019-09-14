import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEventinfoBasicComponent } from './event-eventinfo-basic.component';

describe('EventEventinfoBasicComponent', () => {
  let component: EventEventinfoBasicComponent;
  let fixture: ComponentFixture<EventEventinfoBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEventinfoBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEventinfoBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
