import {Component, EventEmitter, OnInit, Output, Renderer2, ViewContainerRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-mini-search-input',
  templateUrl: './mini-search-input.component.html',
  styleUrls: ['./mini-search-input.component.scss']
})
export class MiniSearchInputComponent implements OnInit {
  @Output() event: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private _renderer: Renderer2, private _vcRef: ViewContainerRef) {
  }

  ngOnInit() {
  }

  contentForm: FormGroup = new FormGroup({
    inputContent: new FormControl('')
  });

  onSearch(): void {
    this.event.emit(this.contentForm);

    const firstInput = document.querySelector('* /deep/ .search__input');
    const secondInput = document.querySelector('.mini-search__input');

    const secondInputWidth = getComputedStyle(secondInput).width;

    // make a request if width is not equal 16px
    if (secondInputWidth !== '16px') {
      this.event.emit(this.contentForm);
    }

    if (secondInputWidth === '16px') {
      this._renderer.setStyle(firstInput, 'width', '0');
      this._renderer.setStyle(secondInput, 'width', '340px');
    }
  }
}
