import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGroupsControlComponent } from './search-groups-control.component';

describe('SearchGroupsControlComponent', () => {
  let component: SearchGroupsControlComponent;
  let fixture: ComponentFixture<SearchGroupsControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGroupsControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGroupsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
