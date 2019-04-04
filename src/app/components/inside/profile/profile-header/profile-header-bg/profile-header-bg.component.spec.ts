import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeaderBgComponent } from './profile-header-bg.component';

describe('ProfileHeaderBgComponent', () => {
  let component: ProfileHeaderBgComponent;
  let fixture: ComponentFixture<ProfileHeaderBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHeaderBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHeaderBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
