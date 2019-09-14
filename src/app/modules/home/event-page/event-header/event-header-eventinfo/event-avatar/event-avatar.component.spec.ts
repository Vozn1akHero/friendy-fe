import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAvatarComponent } from './event-avatar.component';

describe('EventAvatarComponent', () => {
  let component: EventAvatarComponent;
  let fixture: ComponentFixture<EventAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
