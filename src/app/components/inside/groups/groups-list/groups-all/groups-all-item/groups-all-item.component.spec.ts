import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsAllItemComponent } from './groups-all-item.component';

describe('GroupsAllItemComponent', () => {
  let component: GroupsAllItemComponent;
  let fixture: ComponentFixture<GroupsAllItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsAllItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsAllItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
