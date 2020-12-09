import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() list;

  text;
  isShow: boolean;
  show() {
    if(this.isShow){
      this.isShow = false;
    }
    else {
      this.isShow = true;
    }
  }
  ngOnInit(): void {
  }

}
