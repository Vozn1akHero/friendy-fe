import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHeaderBgAlterComponent } from './event-header-bg-alter.component';

describe('EventHeaderBgAlterComponent', () => {
  let component: EventHeaderBgAlterComponent;
  let fixture: ComponentFixture<EventHeaderBgAlterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventHeaderBgAlterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHeaderBgAlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
