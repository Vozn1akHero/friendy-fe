import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePhotosItemComponent } from './profile-photos-item.component';

describe('ProfilePhotosItemComponent', () => {
  let component: ProfilePhotosItemComponent;
  let fixture: ComponentFixture<ProfilePhotosItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePhotosItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePhotosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
