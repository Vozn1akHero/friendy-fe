import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FullScreenImageService} from '../../services/full-screen-image.service';

@Component({
  selector: 'app-full-screen-image',
  templateUrl: './full-screen-image.component.html',
  styleUrls: ['./full-screen-image.component.scss']
})
export class FullScreenImageComponent implements OnInit {
  imageUrl$: Observable<string>;

  constructor(private fullScreenImageService : FullScreenImageService) { }

  ngOnInit() {
    this.imageUrl$ = this.fullScreenImageService.imageUrl$;
  }

  closeModal() {
    this.fullScreenImageService.close();
  }
}
