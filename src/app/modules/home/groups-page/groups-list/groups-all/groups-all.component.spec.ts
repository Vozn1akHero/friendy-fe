import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsAllComponent } from './groups-all.component';

describe('GroupsAllComponent', () => {
  let component: GroupsAllComponent;
  let fixture: ComponentFixture<GroupsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
