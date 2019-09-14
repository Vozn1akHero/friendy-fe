import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAvatarAlterComponent } from './event-avatar-alter.component';

describe('EventAvatarAlterComponent', () => {
  let component: EventAvatarAlterComponent;
  let fixture: ComponentFixture<EventAvatarAlterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAvatarAlterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAvatarAlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
