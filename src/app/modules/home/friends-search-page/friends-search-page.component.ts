import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {State, Store} from '@ngrx/store';
import * as fromApp from '../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {FriendsSearchService} from './services/friends-search.service';

@Component({
  selector: 'app-friends-search-page',
  templateUrl: './friends-search-page.component.html',
  styleUrls: ['./friends-search-page.component.scss']
})
export class FriendsSearchPageComponent implements OnInit, OnDestroy {

  private searchTerm: string;
  private searchTermInserted: boolean;

  private usersByCriteriaRes : Subscription;

  constructor(private renderer: Renderer2,
              private friendsSearchService: FriendsSearchService,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
/*    this.activatedRoute.queryParams.subscribe(params => {
      this.userSearchingActivated = params.userSearchingActivated != null;
    })*/
  }


  ngOnDestroy(): void {

  }
}
