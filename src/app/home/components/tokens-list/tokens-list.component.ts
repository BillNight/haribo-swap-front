import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tokens-list',
  templateUrl: './tokens-list.component.html',
  styleUrls: ['./tokens-list.component.scss']
})
export class TokensListComponent implements OnChanges {

  @Input() listItems: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.listItems && changes.listItems.currentValue) {
      this.listItems = changes.listItems.currentValue;
    }
  }

}
