import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators, Form} from '@angular/forms';
import UserSearchModelDto from '../../models/user-search-dto.model';
import {FriendsSearchService} from '../../services/friends-search.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-friends-search-form',
  templateUrl: './friends-search-form.component.html',
  styleUrls: ['./friends-search-form.component.scss']
})
export class FriendsSearchFormComponent implements OnInit {
  searchForm = new FormGroup({
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
    familyStatus: new FormControl(''),
    religion: new FormControl(''),
    alcoholOpinion: new FormControl(''),
    smokingOpinion: new FormControl(''),
    drugsOpinion: new FormControl(''),
    interests: new FormControl('')
  });

  @Output() advSearchFormSubmit: EventEmitter<FormGroup> = new EventEmitter();

  @ViewChild('interestsInput') interestsInput;

  interests: string[] = [];

  constructor(private friendsSearchService: FriendsSearchService) {

  }

  ngOnInit() {
    this.addListenerOnDropdown();
  }

  addNewInterest($event) : void{
    if (($event.which && $event.which == 13) || ($event.keyCode && $event.keyCode == 13)) {
      if(this.interests.length <= 5) {
        this.interests.push($event.target.value);
        $event.target.value = '';
      }
    }
  }

  removeInsertedInterest(index : number){
    console.log("exc")
    //this.interests.splice(index, 1);
  }

  addListenerOnDropdown() : void{
    $(".dropdown-wrapper").on('mouseover', ()=>{
      if($(this).add(".dropdown-wrapper select").hasClass("ng-dirty")){
        $(this).add(".box").show(100);
      }
    });

    $(".dropdown-wrapper").on('mouseleave', ()=>{
      $(".box").hide(100);
    });
  }

  searchSubmit(){
    if(!($(".interests__input").is(":focus"))){
      const searchFormValue = this.searchForm.value;
      const userSearchModel = new UserSearchModelDto(searchFormValue.name,
        searchFormValue.surname,
        searchFormValue.city,
        +searchFormValue.education,
        searchFormValue.school,
        searchFormValue.university,
        +searchFormValue.age.ageMin,
        +searchFormValue.age.ageMax,
        +searchFormValue.gender,
        +searchFormValue.familyStatus,
        +searchFormValue.religion,
        +searchFormValue.alcoholOpinion,
        +searchFormValue.smokingOpinion,
        +searchFormValue.drugsOpinion,
        this.interests);

      this.friendsSearchService.getUsersByCriteria(userSearchModel).subscribe(response => {
        //console.log(response.body);
        //this.foundUsers = response.body;
      });
    }

    /*if(!this.interestsInput.nativeElement.activeElement) {
      console.log(this.searchForm.value)
    }*/
    /*this.friendsSearchService.getUsersByCriteria(this.searchForm.value).subscribe(response => {
      //console.log(response);
      this.foundUsers = response.body;
    });*/
  }
}
