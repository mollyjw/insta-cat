import { Injectable } from '@angular/core';
import { COMMENTS } from '../models-and-mocks/comment-list'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  getAllComments() {
    return COMMENTS
  }

  // addNewComment(params: any) {
  //   console.log("in comments service")
  //   COMMENTS.push(params)
  //   console.log(params)
  // }
}
