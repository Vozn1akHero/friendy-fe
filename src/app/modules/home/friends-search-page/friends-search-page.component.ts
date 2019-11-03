import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FriendsSearchService} from './services/friends-search.service';
import FoundUserModel from './models/found-user.model';

@Component({
  selector: 'app-friends-search-page',
  templateUrl: './friends-search-page.component.html',
  styleUrls: ['./friends-search-page.component.scss']
})
export class FriendsSearchPageComponent implements OnInit, OnDestroy {
  userList : FoundUserModel[] = [];

  constructor(private renderer: Renderer2,
              private friendsSearchService: FriendsSearchService,
              private route: ActivatedRoute) {}

  searchFormSubmit($event){
    this.friendsSearchService.getUsersByCriteria($event).subscribe((response : any) => {
      Array(response.body).map(user => {
        this.userList.push(new FoundUserModel(user.id,
          user.name,
          user.surname,
          user.avatar))
      });
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

  }
}
