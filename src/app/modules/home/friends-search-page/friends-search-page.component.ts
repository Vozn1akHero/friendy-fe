import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FriendsSearchService} from './services/friends-search.service';
import FoundUserModel from './models/found-user.model';
import {Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-friends-search-page',
  templateUrl: './friends-search-page.component.html',
  styleUrls: ['./friends-search-page.component.scss']
})
export class FriendsSearchPageComponent implements OnInit, OnDestroy {
  userList : FoundUserModel[] = [];
  private ngUnsubscribe = new Subject();

  constructor(private renderer: Renderer2,
              private friendsSearchService: FriendsSearchService,
              private route: ActivatedRoute) {}

  searchFormSubmit($event){
    this.friendsSearchService
      .getUsersByCriteria($event)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(value => {
      this.userList = value;
    });
  }

  ngOnInit() {
    this.setStartingUserList();
  }

  setStartingUserList(){
    this.route.snapshot.data.startingUserList.map(user => {
      this.userList.push(new FoundUserModel(user.id,
        user.name,
        user.surname,
        user.avatar))
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
