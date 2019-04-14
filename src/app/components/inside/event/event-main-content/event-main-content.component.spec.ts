import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMainContentComponent } from './event-main-content.component';

describe('EventMainContentComponent', () => {
  let component: EventMainContentComponent;
  let fixture: ComponentFixture<EventMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
