import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortMessagesPanelComponent } from './sort-messages-panel.component';

describe('SortMessagesPanelComponent', () => {
  let component: SortMessagesPanelComponent;
  let fixture: ComponentFixture<SortMessagesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortMessagesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortMessagesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
