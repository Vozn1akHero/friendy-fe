import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsAdvSearchComponent } from './friends-adv-search.component';

describe('FriendsAdvSearchComponent', () => {
  let component: FriendsAdvSearchComponent;
  let fixture: ComponentFixture<FriendsAdvSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsAdvSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsAdvSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
