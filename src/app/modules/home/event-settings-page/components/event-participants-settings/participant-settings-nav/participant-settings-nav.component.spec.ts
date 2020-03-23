import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantSettingsNavComponent } from './participant-settings-nav.component';

describe('ParticipantSettingsNavComponent', () => {
  let component: ParticipantSettingsNavComponent;
  let fixture: ComponentFixture<ParticipantSettingsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantSettingsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantSettingsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
