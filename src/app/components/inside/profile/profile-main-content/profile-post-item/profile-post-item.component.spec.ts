import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePostItemComponent } from './profile-post-item.component';

describe('ProfilePostItemComponent', () => {
  let component: ProfilePostItemComponent;
  let fixture: ComponentFixture<ProfilePostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
