import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserinfoBasicComponent } from './profile-userinfo-basic.component';

describe('ProfileUserinfoBasicComponent', () => {
  let component: ProfileUserinfoBasicComponent;
  let fixture: ComponentFixture<ProfileUserinfoBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUserinfoBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUserinfoBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
