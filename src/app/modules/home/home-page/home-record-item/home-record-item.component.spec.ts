import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecordItemComponent } from './home-record-item.component';

describe('HomeRecordItemComponent', () => {
  let component: HomeRecordItemComponent;
  let fixture: ComponentFixture<HomeRecordItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRecordItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRecordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
