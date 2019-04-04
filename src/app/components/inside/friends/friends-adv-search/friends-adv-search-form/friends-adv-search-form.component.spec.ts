import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsAdvSearchFormComponent } from './friends-adv-search-form.component';

describe('FriendsAdvSearchFormComponent', () => {
  let component: FriendsAdvSearchFormComponent;
  let fixture: ComponentFixture<FriendsAdvSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsAdvSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsAdvSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
