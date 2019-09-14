import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSearchInputComponent } from './mini-search-input.component';

describe('MiniSearchInputComponent', () => {
  let component: MiniSearchInputComponent;
  let fixture: ComponentFixture<MiniSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
