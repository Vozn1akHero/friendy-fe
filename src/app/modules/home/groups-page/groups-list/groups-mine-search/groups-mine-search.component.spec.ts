import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsMineSearchComponent } from './groups-mine-search.component';

describe('GroupsMineSearchComponent', () => {
  let component: GroupsMineSearchComponent;
  let fixture: ComponentFixture<GroupsMineSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsMineSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsMineSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
