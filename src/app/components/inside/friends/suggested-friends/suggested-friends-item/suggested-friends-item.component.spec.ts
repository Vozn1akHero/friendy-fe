import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedFriendsItemComponent } from './suggested-friends-item.component';

describe('SuggestedFriendsItemComponent', () => {
  let component: SuggestedFriendsItemComponent;
  let fixture: ComponentFixture<SuggestedFriendsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedFriendsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedFriendsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
