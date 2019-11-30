import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSafetySettingsComponent } from './user-safety-settings.component';

describe('UserSafetySettingsComponent', () => {
  let component: UserSafetySettingsComponent;
  let fixture: ComponentFixture<UserSafetySettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSafetySettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSafetySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
