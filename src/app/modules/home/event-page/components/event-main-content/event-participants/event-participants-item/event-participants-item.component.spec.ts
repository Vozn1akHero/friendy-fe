import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventParticipantsItemComponent } from './event-participants-item.component';

describe('EventParticipantsItemComponent', () => {
  let component: EventParticipantsItemComponent;
  let fixture: ComponentFixture<EventParticipantsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventParticipantsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventParticipantsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
