import {Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators, Form} from '@angular/forms';
import UserSearchModelDto from '../../models/user-search-dto.model';
import {FriendsSearchService} from '../../services/friends-search.service';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-friends-search-form',
  templateUrl: './friends-search-form.component.html',
  styleUrls: ['./friends-search-form.component.scss']
})
export class FriendsSearchFormComponent implements OnInit {
  searchForm = new FormGroup({
    name: new FormControl(null),
    surname: new FormControl(null),
    city: new FormControl(null),
    education: new FormControl(''),
    school: new FormControl(null),
    university: new FormControl(null),
    birthday: new FormGroup({
      birthdayMin: new FormControl(null),
      birthdayMax: new FormControl(null)
    }),
    gender: new FormControl(''),
    maritalStatus: new FormControl(''),
    religion: new FormControl(''),
    alcoholAttitude: new FormControl(''),
    smokingAttitude: new FormControl(''),
    interests: new FormControl([])
  });

  @Output() searchFormSubmitEmitter: EventEmitter<UserSearchModelDto> = new EventEmitter();
  @ViewChild('interestsInput') interestsInput;
  @ViewChild('dropdownWrapper') dropdownWrapperList : QueryList<ElementRef>;

  @ViewChild('birthdayMin') birthdayMinInput : ElementRef<HTMLInputElement>;
  @ViewChild('birthdayMax') birthdayMaxInput : ElementRef<HTMLInputElement>;
  birthdayMinInputFocused: boolean = false;
  birthdayMaxInputFocused: boolean = false;

  interests: string[] = [];
  showCalendar: boolean = false;

  constructor(private friendsSearchService: FriendsSearchService) {

  }

  ngOnInit() {
    this.addListenerOnDropdowns();
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

  addListenerOnDropdowns() : void{
    const dropDowns = document.querySelectorAll(".dropdown-wrapper");
    dropDowns.forEach((element) => {
      element.addEventListener('mouseover', (event)=>{
        const target : HTMLTextAreaElement = <HTMLTextAreaElement>event.currentTarget;
        const selector = "."+target.classList.item(1) + " .custom-dropdown select";
        if(document.querySelector(selector).classList.contains("ng-dirty")){
          const boxSelector : HTMLElement = document
            .querySelector("." + target.classList.item(1) + " .box");
          boxSelector.style.visibility = 'visible';
          boxSelector.style.opacity = '1';
        }
      });

      element.addEventListener('mouseleave', (event)=>{
        const target : HTMLTextAreaElement = <HTMLTextAreaElement>event.currentTarget;
        const boxSelector : HTMLElement = document
          .querySelector("." + target.classList.item(1) + " .box");
        boxSelector.style.opacity = '0';
        setTimeout(()=>{
          boxSelector.style.visibility = 'hidden';
        }, 1500);
      });
    });
  }

  searchSubmit(){
    const searchFormValue = this.searchForm.value;

    const userSearchModel = new UserSearchModelDto(searchFormValue.name,
      searchFormValue.surname,
      searchFormValue.city,
      +searchFormValue.education,
      searchFormValue.school,
      searchFormValue.university,
      searchFormValue.birthday.birthdayMin,
      searchFormValue.birthday.birthdayMax,
      +searchFormValue.gender,
      +searchFormValue.maritalStatus,
      +searchFormValue.religion,
      +searchFormValue.alcoholAttitude,
      +searchFormValue.smokingAttitude,
      this.interests);

    if(!this.interestsInput.nativeElement.activeElement) {
      console.log(userSearchModel)
      this.searchFormSubmitEmitter.emit(userSearchModel);
    }
  }

  onSelectBirthday($event){
    if(this.birthdayMaxInputFocused){
      this.birthdayMaxInput.nativeElement.value = $event;
      this.showCalendar = false;
    } else if (this.birthdayMinInputFocused){
      this.birthdayMinInput.nativeElement.value = $event;
      this.showCalendar = false;
    }
  }

  setShowCalendar(){
    this.showCalendar = true;
  }

  setBirthdayMinInputFocused(){
    this.setShowCalendar();
    this.birthdayMinInputFocused = true;
  }
  setBirthdayMaxInputFocused(){
    this.setShowCalendar();
    this.birthdayMaxInputFocused = true;
  }
}
