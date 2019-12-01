import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-post-comments-page',
  templateUrl: './post-comments-subpage.component.html',
  styleUrls: ['./post-comments-subpage.component.scss'],
  animations: [
    trigger('anim', [
      transition(':enter', [
        style({
          opacity: '0'
        }),
        animate(
          '300ms ease-in',
          style({ opacity: '1' })
        )
      ])
    ])
  ]
})
export class PostCommentsSubpageComponent implements OnInit {
  @Input() postId: number;
  @Input() postType: number; // 1 - user, 2 - event

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
