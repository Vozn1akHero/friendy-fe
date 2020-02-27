import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators, Form} from '@angular/forms';
import UserSearchModelDto from '../../models/user-search-criteria.model';
import {Subscription} from 'rxjs';
import UserInterestModel from '../../models/user-interest.model';
import {FriendsSearchService} from '../../services/friends-search.service';

@Component({
  selector: 'app-friends-search-form',
  templateUrl: './friends-search-form.component.html',
  styleUrls: ['./friends-search-form.component.scss']
})
export class FriendsSearchFormComponent implements OnInit, OnDestroy {
  searchForm = new FormGroup({
    name: new FormControl(null),
    surname: new FormControl(null),
    city: new FormControl(null),
    education: new FormControl(''),
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
  foundInterestsSub: Subscription;
  foundInterests: UserInterestModel[] = [];

  @Output() searchFormSubmitEmitter: EventEmitter<UserSearchModelDto> = new EventEmitter();
  @ViewChild('interestsInput') interestsInput;
  @ViewChild('dropdownWrapper') dropdownWrapperList: QueryList<ElementRef>;

  @ViewChild('birthdayMin') birthdayMinInput: ElementRef<HTMLInputElement>;
  @ViewChild('birthdayMax') birthdayMaxInput: ElementRef<HTMLInputElement>;
  birthdayMinInputFocused: boolean = false;
  birthdayMaxInputFocused: boolean = false;

  interests: string[] = [];
  selectedInterests: UserInterestModel[] = [];
  showCalendar: boolean = false;

  constructor(private friendsSearchService: FriendsSearchService,) {
  }

  ngOnInit() {
    this.addListenerOnDropdowns();
  }

  addNewInterest(id: number): void {
    const el = this.foundInterests.find(e => e.id === id);
    if(this.selectedInterests.indexOf(el) === -1) this.selectedInterests.push(el);
  }

  removeInsertedInterest(id: number) {
    this.selectedInterests.splice(this
      .selectedInterests
      .indexOf(this.selectedInterests.find(e => e.id == id)), 1);
  }

  addListenerOnDropdowns(): void {
    const dropDowns = document.querySelectorAll('.dropdown-wrapper');
    dropDowns.forEach((element) => {
      element.addEventListener('mouseover', (event) => {
        const target: HTMLTextAreaElement = <HTMLTextAreaElement> event.currentTarget;
        const selector = '.' + target.classList.item(1) + ' .custom-dropdown select';
        if (document.querySelector(selector).classList.contains('ng-dirty')) {
          const boxSelector: HTMLElement = document
            .querySelector('.' + target.classList.item(1) + ' .box');
          boxSelector.style.visibility = 'visible';
          boxSelector.style.opacity = '1';
        }
      });

      element.addEventListener('mouseleave', (event) => {
        const target: HTMLTextAreaElement = <HTMLTextAreaElement> event.currentTarget;
        const boxSelector: HTMLElement = document
          .querySelector('.' + target.classList.item(1) + ' .box');
        boxSelector.style.opacity = '0';
        setTimeout(() => {
          boxSelector.style.visibility = 'hidden';
        }, 1500);
      });
    });
  }

  searchSubmit() {
    const searchFormValue = this.searchForm.value;

    const userSearchModel = new UserSearchModelDto(searchFormValue.name,
      searchFormValue.surname,
      searchFormValue.city,
      searchFormValue.education === '' ? null : +searchFormValue.education,
/*      searchFormValue.school,
      searchFormValue.university,*/
      searchFormValue.birthday.birthdayMin,
      searchFormValue.birthday.birthdayMax,
      searchFormValue.gender === '' ? null : +searchFormValue.gender,
      searchFormValue.maritalStatus === '' ? null : +searchFormValue.maritalStatus,
      searchFormValue.religion === '' ? null : +searchFormValue.religion,
      searchFormValue.alcoholAttitude === '' ? null : +searchFormValue.alcoholAttitude,
      searchFormValue.smokingAttitude === '' ? null : +searchFormValue.smokingAttitude,
      this.selectedInterests);

    this.searchFormSubmitEmitter.emit(userSearchModel);
  }

  onSelectBirthday($event) {
    if (this.birthdayMaxInputFocused) {
      this.birthdayMaxInput.nativeElement.value = $event;
      this.showCalendar = false;
    } else if (this.birthdayMinInputFocused) {
      this.birthdayMinInput.nativeElement.value = $event;
      this.showCalendar = false;
    }
  }

  findInterestsByKeyword($event) {
    this.foundInterestsSub = this.friendsSearchService
      .findInterestsByKeyword($event.target.value).subscribe((res: any[]) => {
        this.foundInterests = [];
        res.map(value => {
          this.foundInterests.push(new UserInterestModel(value.id, value.title));
        });
      });
  }

  setShowCalendar() {
    this.showCalendar = true;
  }

  setBirthdayMinInputFocused() {
    this.setShowCalendar();
    this.birthdayMinInputFocused = true;
  }

  setBirthdayMaxInputFocused() {
    this.setShowCalendar();
    this.birthdayMaxInputFocused = true;
  }

  ngOnDestroy(): void {
  }
}
