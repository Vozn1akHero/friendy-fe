import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBorderedNavComponent } from './light-bordered-nav.component';

describe('LightBorderedNavComponent', () => {
  let component: LightBorderedNavComponent;
  let fixture: ComponentFixture<LightBorderedNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightBorderedNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBorderedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
