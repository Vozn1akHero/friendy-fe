import {Component, Input, OnInit} from '@angular/core';
import EventPostModel from '../../models/event-post.model';
import UserPostModel from '../../models/user-post.model';
import {Observable} from 'rxjs';
import PostDataService from '../../services/post-data.service';
import {take} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-event-post',
  templateUrl: './event-post.component.html',
  styleUrls: ['./event-post.component.scss']
})
export class EventPostComponent implements OnInit {
  postData: EventPostModel;
  postDataLoaded: boolean = false;
  @Input() postId: number;
  @Input() postType: number;
  timePassed: string;

  constructor(private postDataService: PostDataService) {

  }

  ngOnInit() {
    this.getEventPostData();
  }

  getEventPostData() {
    this.postDataService.getEventPostData(this.postId)
      .pipe(take(1)).subscribe((res: HttpResponse<any>) => {
      this.postData = new EventPostModel(res.body.id,
        res.body.eventId,
        res.body.content,
        res.body.imagePath,
        res.body.likesCount,
        res.body.commentsCount,
        res.body.postId,
        res.body.isPostLikedByUser,
        res.body.avatar,
        res.body.date);
      this.timePassed = moment(this.postData.date).fromNow();
      this.postDataLoaded = true;
    });
  }

  onLikeOrUnlikePost() {

  }

  onShowCommentsBtnClick() {

  }
}
