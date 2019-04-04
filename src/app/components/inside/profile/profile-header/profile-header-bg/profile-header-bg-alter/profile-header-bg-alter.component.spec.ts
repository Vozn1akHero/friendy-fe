import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeaderBgAlterComponent } from './profile-header-bg-alter.component';

describe('ProfileHeaderBgAlterComponent', () => {
  let component: ProfileHeaderBgAlterComponent;
  let fixture: ComponentFixture<ProfileHeaderBgAlterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHeaderBgAlterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHeaderBgAlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
