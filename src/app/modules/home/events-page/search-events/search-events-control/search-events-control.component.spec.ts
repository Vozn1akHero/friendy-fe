import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEventsControlComponent } from './search-events-control.component';

describe('SearchEventsControlComponent', () => {
  let component: SearchEventsControlComponent;
  let fixture: ComponentFixture<SearchEventsControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEventsControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEventsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
