import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMineSearchComponent } from './events-mine-search.component';

describe('EventsMineSearchComponent', () => {
  let component: EventsMineSearchComponent;
  let fixture: ComponentFixture<EventsMineSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsMineSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsMineSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
