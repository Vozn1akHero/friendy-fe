import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPostItemComponent } from './event-post-item.component';

describe('EventPostItemComponent', () => {
  let component: EventPostItemComponent;
  let fixture: ComponentFixture<EventPostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
