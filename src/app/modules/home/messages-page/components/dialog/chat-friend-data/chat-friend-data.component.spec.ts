import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFriendDataComponent } from './chat-friend-data.component';

describe('ChatFriendDataComponent', () => {
  let component: ChatFriendDataComponent;
  let fixture: ComponentFixture<ChatFriendDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatFriendDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFriendDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
