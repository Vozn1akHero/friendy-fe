import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventNewPostComponent } from './event-new-post.component';

describe('EventNewPostComponent', () => {
  let component: EventNewPostComponent;
  let fixture: ComponentFixture<EventNewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventNewPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
