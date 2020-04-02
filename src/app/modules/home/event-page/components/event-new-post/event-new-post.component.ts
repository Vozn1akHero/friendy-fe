import { Component, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventPostService } from "../../services/event-post.service";

@Component({
  selector: "app-event-new-post",
  templateUrl: "./event-new-post.component.html",
  styleUrls: ["./event-new-post.component.scss"]
})
export class EventNewPostComponent implements OnInit, OnDestroy {
  @ViewChild("image") image;
  @ViewChild("newMessageContent") newMessageContent;
  @Input() isUserAdmin: boolean;

  constructor(
    private eventPostService: EventPostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  onSubmit(newPost) {
    this.eventPostService.create(
      newPost,
      +this.route.snapshot.paramMap.get("id")
    );
  }

  ngOnDestroy(): void {}
}
