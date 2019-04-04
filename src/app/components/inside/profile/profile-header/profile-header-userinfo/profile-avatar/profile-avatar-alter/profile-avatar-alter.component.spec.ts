import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAvatarAlterComponent } from './profile-avatar-alter.component';

describe('ProfileAvatarAlterComponent', () => {
  let component: ProfileAvatarAlterComponent;
  let fixture: ComponentFixture<ProfileAvatarAlterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAvatarAlterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAvatarAlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
