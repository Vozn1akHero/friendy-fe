import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss']
})
export class PhotosPageComponent implements OnInit {
  chosenSubpage: string;
  id: number;

  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");
    this.getChosenSubpage();
  }

  getChosenSubpage(){
    if(this.router.url.includes("profile")){
      this.chosenSubpage = "profile-page"
    } else {
      this.chosenSubpage = "event-page"
    }
  }
}
