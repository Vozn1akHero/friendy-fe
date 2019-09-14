import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsListControlsComponent } from './groups-list-controls.component';

describe('GroupsListControlsComponent', () => {
  let component: GroupsListControlsComponent;
  let fixture: ComponentFixture<GroupsListControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsListControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsListControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
