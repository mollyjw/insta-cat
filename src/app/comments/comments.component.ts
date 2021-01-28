import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Comment } from '../comment.model'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  allowNewComment = false;
  comment: Comment;
  commentLength: Number;
  commentText: string

  commentForm = new FormGroup({
    message: new FormControl(''),
  })

  constructor(
  ) {}

  ngOnInit(): void {  }

  allowButton() {
    const commentLength = this.comment.commentText.length
    if (commentLength > 0) {
      this.allowNewComment = true
    }
  }

  submit() {
    console.log("submitted")
    const newComment = new Comment (this.commentForm.value);
    console.log(this.commentForm.value);
    console.log(newComment)
  }

}
