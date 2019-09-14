import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedGroupsItemComponent } from './suggested-groups-item.component';

describe('SuggestedGroupsItemComponent', () => {
  let component: SuggestedGroupsItemComponent;
  let fixture: ComponentFixture<SuggestedGroupsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedGroupsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedGroupsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
