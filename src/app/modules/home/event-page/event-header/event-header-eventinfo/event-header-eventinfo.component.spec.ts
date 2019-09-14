import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHeaderEventinfoComponent } from './event-header-eventinfo.component';

describe('EventHeaderEventinfoComponent', () => {
  let component: EventHeaderEventinfoComponent;
  let fixture: ComponentFixture<EventHeaderEventinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventHeaderEventinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHeaderEventinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
