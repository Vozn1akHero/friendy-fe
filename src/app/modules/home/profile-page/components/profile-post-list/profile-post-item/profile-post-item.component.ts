import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Post from '../../../models/post.model';
import * as moment from 'moment';
import * as UserPostsActions from '../../../store/user-posts/user-posts.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../core/ngrx/store/app.reducer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-post-item',
  templateUrl: './profile-post-item.component.html',
  styleUrls: ['./profile-post-item.component.scss']
})
export class ProfilePostItemComponent implements OnInit {
  @Input() post : Post;
  @Input() userAvatarUrl : string;
  @Input() userId : number;
  @Input() isUserProfileOwner : boolean;

/*  @Output() removePost: EventEmitter<number> = new EventEmitter<number>();
  @Output() likePost: EventEmitter<number> = new EventEmitter<number>();
  @Output() unlikePost: EventEmitter<number> = new EventEmitter<number>();*/

  timePassed: string;
  //putLike: boolean = false;

  constructor(private store: Store<fromApp.AppState>, private router: Router) {
  }

  ngOnInit() {
    this.timePassed = moment(this.post.date).fromNow();
/*
    this.post.userPostLikes.map(userPostLike => {
      if(userPostLike.userId === this.userId){
        this.putLike = true;
      }
    })*/
  }

  onLikeOrUnlikePost(){
    if(this.post.isPostLikedByUser) this.onUnlikePost();
    else this.onLikePost();
  }

  onRemovePost(){
    this.store.dispatch(new UserPostsActions.RemovePost({ id: this.post.postId }))
  }

  onLikePost(){
    this.store.dispatch(new UserPostsActions.LikePost({ id: this.post.postId  }));
    this.post.isPostLikedByUser = true;
  }

  onUnlikePost(){
    this.store.dispatch(new UserPostsActions.UnlikePost({ id: this.post.postId  }));
    this.post.isPostLikedByUser = false;
  }

  onShowCommentsBtnClick(){
    this.router.navigate([window.location.pathname, 'comments', this.post.id ])
  }
}
