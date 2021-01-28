export class Comment {
commentText: string

  constructor({
    commentText = ''
  }) {
    Object.assign(this)
    this.commentText = commentText
  }
}
