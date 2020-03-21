import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromApp from "../../../../../core/ngrx/store/app.reducer";
import * as UserPostsActions from "../../store/user-posts/user-posts.actions";

@Component({
  selector: "app-profile-new-post",
  templateUrl: "./profile-new-post.component.html",
  styleUrls: ["./profile-new-post.component.scss"]
})
export class ProfileNewPostComponent implements OnInit {
  @ViewChild("image") image;
  @ViewChild("newMessageContent") newMessageContent;
  @Input() isUserProfileOwner: boolean;
  @Input() userId: number;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {}

  onSubmit(post) {
    this.store.dispatch(
      new UserPostsActions.AddPost({
        id: this.userId,
        post
      })
    );
  }
}
