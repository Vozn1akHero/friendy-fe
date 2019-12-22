import {Component, Input, OnInit} from '@angular/core';
import UserPostModel from '../../models/user-post.model';
import PostDataService from '../../services/post-data.service';
import {HttpResponse} from '@angular/common/http';
import {take} from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {
  postData: UserPostModel;
  postDataLoaded: boolean = false;
  @Input() postId: number;
  timePassed: string;

  constructor(private postDataService: PostDataService) {

  }

  ngOnInit() {
    this.getUserPostData();
  }

  getUserPostData(){
    this.postDataService.getUserPostData(this.postId)
      .pipe(take(1))
      .subscribe((res: HttpResponse<any>) => {
      this.postData = new UserPostModel(res.body.id,
        res.body.userId,
        res.body.content,
        res.body.imagePath,
        res.body.likesCount,
        res.body.commentsCount,
        res.body.postId,
        res.body.isPostLikedByUser,
        res.body.avatar,
        res.body.date);
        this.timePassed = moment(res.body.date).fromNow();
        this.postDataLoaded = true;
    });
  }

  onShowCommentsBtnClick() {

  }

  onLikeOrUnlikePost() {

  }
}
