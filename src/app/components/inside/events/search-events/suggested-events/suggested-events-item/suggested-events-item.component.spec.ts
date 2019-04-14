import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedEventsItemComponent } from './suggested-events-item.component';

describe('SuggestedEventsItemComponent', () => {
  let component: SuggestedEventsItemComponent;
  let fixture: ComponentFixture<SuggestedEventsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedEventsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedEventsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
