import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholenessComponent } from './wholeness.component';

describe('WholenessComponent', () => {
  let component: WholenessComponent;
  let fixture: ComponentFixture<WholenessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholenessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
