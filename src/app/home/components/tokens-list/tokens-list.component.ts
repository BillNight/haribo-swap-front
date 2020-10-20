import { Component, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tokens-list',
  templateUrl: './tokens-list.component.html',
  styleUrls: ['./tokens-list.component.scss']
})
export class TokensListComponent implements OnChanges {

  @Input() listItems: any;

  selectedToken = 'Select Token';
  tokensListState = false;

  constructor(public elementRef: ElementRef) {}

  setTokenListState(): void {
    this.tokensListState = !this.tokensListState;
  }

  selectToken(token: any): void {
    this.tokensListState = false;
    this.selectedToken = token.name;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.listItems && changes.listItems.currentValue) {
      this.listItems = changes.listItems.currentValue;
    }
  }

    // HANDLE COMPONENENT CLICK EVENT
    @HostListener('document:click', ['$event'])
    handleClick(event): void {

      let clickedComponent = event.target;
      let inside = false;

      do {
        if (clickedComponent === this.elementRef.nativeElement) {
          inside = true;
        }
        clickedComponent = clickedComponent.parentNode;

      } while (clickedComponent);
      if (!inside) {
        this.tokensListState = false;
      }
    }


}
