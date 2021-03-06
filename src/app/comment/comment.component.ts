import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Comment[];
  public currentPage = 1;
  public commentsTreeExpanded = [
    {
      name: 'Samy',
      unique_id: 123,
      created_at: '12:34 am',
      message: 'this is cool',
      upvotes: 2,
      downvotes: 0,
      depth: 1,
      replying: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Method to increase comment upvote
   * @param comment
   */
  public upvoted(comment) {
    comment.upvotes += 1;
  }

  /**
   * Method to increase comment downvote
   * @param comment
   */
  public downvoted(comment) {
    comment.downvotes += 1;
  }

  /**
   * Method to add a new reply
   * @param event
   * @param event
   */
  onCmdSubmit(event, comment) {
    comment.replying = false;
    this.commentsTreeExpanded.push(event);
  }

}
