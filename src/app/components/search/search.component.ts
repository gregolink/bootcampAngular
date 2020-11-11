import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() buttonName: string;
  @Output() queryEmitter: EventEmitter<string> = new EventEmitter<string>();
  public query = '';
  constructor() {}

  ngOnInit(): void {}

  sendQuery(): void {
    this.queryEmitter.emit(this.query);
  }
}
