import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventBtnComponent } from './new-event-btn.component';

describe('NewEventBtnComponent', () => {
  let component: NewEventBtnComponent;
  let fixture: ComponentFixture<NewEventBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEventBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
