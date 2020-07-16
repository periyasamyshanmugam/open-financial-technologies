import { Injectable } from '@angular/core';

export class Comment {

	constructor(
		public _id: string,
		public message: string, 
		public name: string, 
		public email: string,
		public parent_id: string,
		public replying: boolean,
		public unique_id: string,
		public upvotes: number,
		public downvotes: number
	){}
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }
}
