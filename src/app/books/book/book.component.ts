import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() list;

  text;
  private changeLog: any;
  constructor() {
  }
  @Output() newLikeEvent = new EventEmitter<string>();
  today: number = Date.now();

  // tslint:disable-next-line:typedef
  addLike() {

    this.list.likes++;

    console.log('You liked the card' + '\n' + 'Number of likes:' + this.list.likes);
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void{
    this.addLike();
  }
  ngOnInit(): void {
  }

}
