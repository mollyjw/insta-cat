import { Component, OnInit } from '@angular/core';
import { Comment } from '../models-and-mocks/comment.model'
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
  ) {}

  ngOnInit(): void { }

}
