import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, Validators, Form} from '@angular/forms';
import UserSearchModel from '../../models/user-search.model';
import {FriendsSearchService} from '../../services/friends-search.service';

@Component({
  selector: 'app-friends-adv-search-form',
  templateUrl: './friends-adv-search-form.component.html',
  styleUrls: ['./friends-adv-search-form.component.scss']
})
export class FriendsAdvSearchFormComponent implements OnInit {
  advSearchExtendedForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    city: new FormControl(''),
    education: new FormControl(''),
    school: new FormControl(''),
    university: new FormControl(''),
    age: new FormGroup({
      ageMin: new FormControl(''),
      ageMax: new FormControl('')
    }),
    gender: new FormControl(''),
    familyStatusId: new FormControl(''),
    religion: new FormControl(''),
    alcoholOpinion: new FormControl(''),
    smokingOpinion: new FormControl(''),
    drugsOpinion: new FormControl(''),
    interests: new FormControl('')
  });

  @Output() advSearchFormSubmit: EventEmitter<FormGroup> = new EventEmitter();
  private foundUsers: any;

 // advFormVisibility: boolean = false;

  constructor(private friendsSearchService: FriendsSearchService) {

  }

  ngOnInit() {
  }

  advSearchSubmit(){
    //this.advSearchFormSubmit.emit(this.advSearchExtendedForm);

    this.friendsSearchService.getUsersByCriteria(this.advSearchExtendedForm.value).subscribe(response => {
      //console.log(response);
      this.foundUsers = response.body;
    });
  }
}
