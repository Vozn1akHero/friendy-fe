import {Component, Input, OnInit} from '@angular/core';
import EventPostModel from '../../models/event-post.model';
import UserPostModel from '../../models/user-post.model';
import {Observable} from 'rxjs';
import PostDataService from '../../services/post-data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postData$: Observable<any>;
  @Input() postId: number;
  @Input() postType: number;

  constructor(private postDataService: PostDataService) { }

  ngOnInit() {
    if(this.postType === 1){
      this.getUserPostData();
    } else {
      this.getEventPostData();
    }
  }

  getUserPostData(){
    this.postData$ = this.postDataService.getUserPostData(this.postId);
  }

  getEventPostData(){
    this.postData$ = this.postDataService.getEventPostData(this.postId);
  }
}
