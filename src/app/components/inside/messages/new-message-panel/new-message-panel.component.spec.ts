import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMessagePanelComponent } from './new-message-panel.component';

describe('NewMessagePanelComponent', () => {
  let component: NewMessagePanelComponent;
  let fixture: ComponentFixture<NewMessagePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMessagePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMessagePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
