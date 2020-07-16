import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Comment } from './../comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  comment: Comment;

  @Input() parent: Comment;
  @Output() commentAdded = new EventEmitter<Comment>();

  constructor() { }

  new_comment() {
    return {
      _id: '',
      message: '',
      name: '',
      email: '',
      parent_id: '',
      replying: false,
      unique_id: '',
      upvotes: 0,
      downvotes: 0
    };
  }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.comment = this.new_comment();
    if (!this.parent) // if there is no parent comment, assign a new comment object
      this.parent = this.new_comment();
    this.comment.parent_id = this.parent._id;
  }

  onSubmit() {
    if (!this.comment.name)
      this.comment.name = 'Anonymous';
    if (!this.comment.email)
      this.comment.email = 'anonymous@comment.app';
    this.commentAdded.emit(this.comment);
  }

}
