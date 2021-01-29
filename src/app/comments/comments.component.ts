import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Comment } from '../models-and-mocks/comment.model'
import { CommentService } from '../services/comment.service';
import { COMMENTS } from '../models-and-mocks/comment-list'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment: Comment
  comments: Comment[] = COMMENTS;

  constructor(
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const commentList = this.commentService.getAllComments()
    for (let i=0; i<commentList.length; i++) {
      console.log(commentList[i].commentText)
    }
    }

}
