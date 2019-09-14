import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupBtnComponent } from './new-group-btn.component';

describe('NewGroupBtnComponent', () => {
  let component: NewGroupBtnComponent;
  let fixture: ComponentFixture<NewGroupBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGroupBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGroupBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
