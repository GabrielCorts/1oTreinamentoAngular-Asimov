import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Output() commentEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  saveComment(name: string, isJedi: boolean): void {
    this.commentEvent.emit({name: name, isJedi: isJedi, temple: 'None'});
  }

}
