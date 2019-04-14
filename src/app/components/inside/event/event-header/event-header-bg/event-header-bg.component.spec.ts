import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHeaderBgComponent } from './event-header-bg.component';

describe('EventHeaderBgComponent', () => {
  let component: EventHeaderBgComponent;
  let fixture: ComponentFixture<EventHeaderBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventHeaderBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHeaderBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
