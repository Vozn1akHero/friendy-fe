import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import autosize from "autosize";
import { CommentType } from "../../../comment-type.enum";
import NewCommentModel from "../../models/new-comment.model";
import { NewCommentService } from "../../services/new-comment.service";
import * as PostCommentActions from "../../store/post-comment/post-comment.actions";
import { AppState } from "../../store/reducers";

@Component({
  selector: "app-new-comment-form",
  templateUrl: "./new-comment-form.component.html",
  styleUrls: ["./new-comment-form.component.scss"]
})
export class NewCommentFormComponent implements OnInit {
  @ViewChild("image") image;
  @ViewChild("textAreaElement") textAreaElement: ElementRef;
  @ViewChild("formElement") form: ElementRef;
  @Input() postId: number;
  typingActive: boolean;
  receiverData: string;

  constructor(
    private store: Store<AppState>,
    private newCommentService: NewCommentService
  ) {}

  ngOnInit() {
    autosize(this.textAreaElement.nativeElement);
    this.newCommentService.initData = { postId: this.postId };
  }

  onSubmit() {
    const content = this.textAreaElement.nativeElement.value
      .replace(/\s+/g, " ")
      .trim();
    const image = this.image.nativeElement.files[0];

    const newComment: NewCommentModel = new NewCommentModel(
      this.newCommentService.commentToPostInitData.postId,
      content,
      image
    );
    this.store.dispatch(new PostCommentActions.Create(newComment));
  }

  activateTyping() {
    this.typingActive = true;
  }
}
