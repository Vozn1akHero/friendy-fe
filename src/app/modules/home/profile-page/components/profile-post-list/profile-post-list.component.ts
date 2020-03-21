import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from "@angular/core";
import Post from "../../models/post.model";
import * as UserPostsActions from "../../store/user-posts/user-posts.actions";
import { Store } from "@ngrx/store";
import * as fromApp from "../../../../../core/ngrx/store/app.reducer";
import SubscriptionManager from "../../../../../shared/helpers/SubscriptionManager";
import { UserPostService } from "../../services/user-post.service";
import { Router } from "@angular/router";
import { PostItemComponent } from "../../../../shared/post/post-item/post-item.component";
import { Observable, of } from "rxjs";
import { AppState } from "../../store/reducers";
import { ScrollableListNotifierService } from "../../../../../shared/services/scrollable-list-notifier.service";

@Component({
  selector: "app-profile-post-list",
  templateUrl: "./profile-post-list.component.html",
  styleUrls: ["./profile-post-list.component.scss"]
})
export class ProfilePostListComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() isUserProfileOwner: boolean;
  @Input() userId: number;
  @ViewChildren(PostItemComponent) postRefs: QueryList<PostItemComponent>;
  posts$: Observable<Post[]>;
  loaded$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private scrollableListNotifierService: ScrollableListNotifierService,
    private subscriptionManager: SubscriptionManager
  ) {}

  ngOnInit() {
    this.getUserPosts();
    this.setListScrollListener();
  }

  getUserPosts() {
    this.store.dispatch(
      new UserPostsActions.GetUserPosts({ userId: this.userId, page: 1 })
    );
    this.loaded$ = this.store.select(
      state => state.profilePageUserPosts.loaded[this.userId]
    );
    this.posts$ = this.store.select(
      state => state.profilePageUserPosts.posts[this.userId]
    );
  }

  onRemovePost(postId: number) {
    this.store.dispatch(new UserPostsActions.RemovePost({ id: postId }));
  }

  onLikePost(postId: number) {
    this.store.dispatch(new UserPostsActions.LikePost({ id: postId }));
  }

  onUnlikePost(postId: number) {
    this.store.dispatch(new UserPostsActions.UnlikePost({ id: postId }));
  }

  setListScrollListener() {
    this.subscriptionManager.add(
      this.scrollableListNotifierService.endReached$.subscribe(value => {
        if (value) {
          this.store.dispatch(
            new UserPostsActions.StartFulfilling({
              id: this.userId,
              page: this.scrollableListNotifierService.currentPage
            })
          );
          this.scrollableListNotifierService.setDefaultValue();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }

  ngAfterViewInit(): void {}
}
