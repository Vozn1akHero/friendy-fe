import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeaderUserinfoComponent } from './profile-header-userinfo.component';

describe('ProfileHeaderUserinfoComponent', () => {
  let component: ProfileHeaderUserinfoComponent;
  let fixture: ComponentFixture<ProfileHeaderUserinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHeaderUserinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHeaderUserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
