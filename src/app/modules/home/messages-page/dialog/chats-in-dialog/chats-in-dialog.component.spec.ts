import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsInDialogComponent } from './chats-in-dialog.component';

describe('ChatsInDialogComponent', () => {
  let component: ChatsInDialogComponent;
  let fixture: ComponentFixture<ChatsInDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsInDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsInDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
