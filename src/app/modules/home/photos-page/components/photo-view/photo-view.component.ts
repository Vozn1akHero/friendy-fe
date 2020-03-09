import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import Photo from '../../models/photo.model';
import {PhotoViewService} from '../../services/photo-view.service';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.scss']
})
export class PhotoViewComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log(1)
  }

  photo$: Observable<Photo>;

  constructor(private photoViewService: PhotoViewService,) { }

  ngOnInit() {
    this.photo$ = this.photoViewService.image$;
  }

}
