import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDataService} from '../../services/user-data.service';
import {Observable} from 'rxjs';
import UserInterestModel from '../../models/user-interest.model';
import {UserInterestsService} from '../../services/user-interests.service';
import {take} from 'rxjs/operators';
import InterestModel from '../../models/interest.model';

@Component({
  selector: 'app-user-interests-settings',
  templateUrl: './user-interests-settings.component.html',
  styleUrls: ['./user-interests-settings.component.scss']
})
export class UserInterestsSettingsComponent implements OnInit {
  //userInterests$: Observable<UserInterestModel[]>;
  userInterests: UserInterestModel[];
  userInterestsLoaded: boolean;
  //userInterests: string[];
  insertedInterest: UserInterestModel;
  interestInputValue: string;
  @ViewChild('interestInputRef') interestInputRef: ElementRef<HTMLInputElement>;
  foundInterests: InterestModel[];
  
  constructor(private userDataService : UserDataService, 
              private userInterestsService: UserInterestsService) {
    this.interestInputValue = "";
    this.foundInterests = [];
    this.userInterestsLoaded = false;
  }

  ngOnInit() {
    this.getCurrentAddData();
  }

  getCurrentAddData(){
    this.userDataService.userInterests$.pipe(take(1)).subscribe(value => {
      this.userInterests = value;
      this.userInterestsLoaded = true;
    })
  }

  removeInterest(id: number) {
    this.userInterestsService.removeById(id).pipe(take(1)).subscribe()
  }

  onInterestsInputChange() {
    this.interestInputValue = this.interestInputRef.nativeElement.value;
    const currentValue = this.interestInputValue;
    setTimeout(() => {
      if(currentValue === this.interestInputValue){
        this.userInterestsService.getByTitle(currentValue)
          .pipe(take(1)).subscribe(res => {
          this.foundInterests = [...res.map(value => {
            return !this.userInterests.find(e => e.title.toString() === value.title) && value;
          })]
        })
      }
    }, 500)
  }

  selectInterest(id: number) {
    
  }
}
