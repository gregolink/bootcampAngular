import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss'],
})
export class DropDownListComponent implements OnInit {
  @Input() itemList: string[];
  @Output() selectedItem: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onChange(item: string): void {
    this.selectedItem.emit(item);
  }
}
