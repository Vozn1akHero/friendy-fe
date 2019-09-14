import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAllItemComponent } from './events-all-item.component';

describe('EventsAllItemComponent', () => {
  let component: EventsAllItemComponent;
  let fixture: ComponentFixture<EventsAllItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsAllItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsAllItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
