import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPhotosItemComponent } from './event-photos-item.component';

describe('EventPhotosItemComponent', () => {
  let component: EventPhotosItemComponent;
  let fixture: ComponentFixture<EventPhotosItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPhotosItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPhotosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
