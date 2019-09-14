import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-friends',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss']
})
export class FriendsPageComponent implements OnInit {
  advSearch = new FormGroup({
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

  constructor() { }

  ngOnInit() {
  }

  advSearchSubmit(){
    console.log(this.advSearch.value);
  }

}
