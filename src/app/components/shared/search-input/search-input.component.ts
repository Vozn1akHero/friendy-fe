import {Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewContainerRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() styles = {
    newMessageWidth: '500px',
    newMessageFormTextAreaWidth : '44em',
    newMessageFormFileBtnWrapperInputTop: '0'
  };

  @Output() event : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  contentForm : FormGroup = new FormGroup({
    inputContent : new FormControl('')
  });

  constructor(private _renderer: Renderer2, private _vcRef: ViewContainerRef) { }

  ngOnInit() {
  }

  onSearch() {
    const firstInput = document.querySelector('* /deep/ .mini-search__input');
    const secondInput = document.querySelector('.search__input');

    const secondInputWidth = getComputedStyle(secondInput).width;

    // make a request if width is not equal 16px
    if(secondInputWidth !== '16px'){
      this.event.emit(this.contentForm);
    }

    if (secondInputWidth === '16px'){
      this._renderer.setStyle(firstInput, 'width', '0');
      this._renderer.setStyle(secondInput, 'width', '84%');
    }
  }
}
