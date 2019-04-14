import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendInChatsInDialogComponent } from './friend-in-chats-in-dialog.component';

describe('FriendInChatsInDialogComponent', () => {
  let component: FriendInChatsInDialogComponent;
  let fixture: ComponentFixture<FriendInChatsInDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendInChatsInDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendInChatsInDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
