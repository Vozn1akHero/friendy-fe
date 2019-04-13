import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinupPopupComponent } from './joinup-popup.component';

describe('JoinupPopupComponent', () => {
  let component: JoinupPopupComponent;
  let fixture: ComponentFixture<JoinupPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinupPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinupPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
