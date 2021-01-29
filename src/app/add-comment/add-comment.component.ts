import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommentService } from '../services/comment.service';
import { Comment } from '../models-and-mocks/comment.model'

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  model = new Comment('', '')
  submitted = false;

  onSubmit() { this.submitted = true; }

  // commentForm = new FormGroup({
  //   name: new FormControl(''),
  //   commentText: new FormControl(''),
  // })

  constructor(
    private commentService: CommentService
  ) {}

  ngOnInit(): void {  }

  newComment() {
    console.log("comment added")
    this.model = new Comment(this.model.name, this.model.commentText)
    console.log(this.model.name)
    this.commentService.addNewComment(this.model)
  }

}
