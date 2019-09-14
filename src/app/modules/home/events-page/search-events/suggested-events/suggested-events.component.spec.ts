import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedEventsComponent } from './suggested-events.component';

describe('SuggestedEventsComponent', () => {
  let component: SuggestedEventsComponent;
  let fixture: ComponentFixture<SuggestedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
