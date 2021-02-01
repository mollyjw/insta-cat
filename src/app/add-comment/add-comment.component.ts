import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CommentService } from '../services/comment.service';
import { Comment } from '../models-and-mocks/comment.model'
import { COMMENTS } from '../models-and-mocks/comment-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  newPost = new Comment('', '')
  submitted = false;
  allComments = COMMENTS

  onSubmit() { this.submitted = true; }

  commentForm: NgForm;
  // commentForm = new FormGroup({
  //   name: new FormControl(''),
  //   commentText: new FormControl(''),
  // })

  newComment(commentForm: NgForm) {
    this.newPost = new Comment(this.newPost.name, this.newPost.commentText)
    this.allComments.push(this.newPost);
    console.log("i submitted")
    commentForm.reset()
    // this.newPost = new Comment('', '')
    console.log("i reseted")
  }

}
