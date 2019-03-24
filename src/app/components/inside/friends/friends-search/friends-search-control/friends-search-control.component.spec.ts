import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsSearchControlComponent } from './friends-search-control.component';

describe('FriendsSearchControlComponent', () => {
  let component: FriendsSearchControlComponent;
  let fixture: ComponentFixture<FriendsSearchControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsSearchControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsSearchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
