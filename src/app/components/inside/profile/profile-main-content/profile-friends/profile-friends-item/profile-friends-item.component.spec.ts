import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFriendsItemComponent } from './profile-friends-item.component';

describe('ProfileFriendsItemComponent', () => {
  let component: ProfileFriendsItemComponent;
  let fixture: ComponentFixture<ProfileFriendsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFriendsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFriendsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
