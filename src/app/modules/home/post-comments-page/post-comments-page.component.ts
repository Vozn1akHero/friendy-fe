import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-comments-page',
  templateUrl: './post-comments-page.component.html',
  styleUrls: ['./post-comments-page.component.scss']
})
export class PostCommentsPageComponent implements OnInit {
  @Input() postId: number;
  @Input() postType: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.postId = this.route.snapshot.params.postId;
    this.setPostType();
  }

  setPostType(){
    if(this.router.url.indexOf("profile") !== -1){
      this.postType = 1;
    } else if(this.router.url.indexOf("event") !== -1){
      this.postType = 2;
    }
  }
}
