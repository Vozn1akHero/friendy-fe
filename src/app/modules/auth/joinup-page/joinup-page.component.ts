import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {animate, group, query, style, transition, trigger} from '@angular/animations';
import {AuthService} from '../../../core/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-joinup-section',
  templateUrl: './joinup-page.component.html',
  styleUrls: ['./joinup-page.component.scss'],
  animations: [
    trigger('anim', [
      transition(':enter', [
        style({
          opacity: '0'
        }),
        animate(
          '300ms ease-in',
          style({ opacity: '1' })
        )
      ])
    ])
  ]
})

export class JoinupPageComponent implements OnInit {
  emailInputAvailability = true;
  onRegistrationSuccessPopupVisibility = false;

  joinUpForm = new FormGroup({
    name: new FormControl('',
      [Validators.required]),
    surname: new FormControl('',
      [Validators.required]),
    city: new FormControl('',
      [Validators.required]),
    gender: new FormControl('',
      [Validators.required]),
    birthYear: new FormControl('',
      [Validators.maxLength(4),
        Validators.maxLength(4),
        Validators.required]),
    birthDay: new FormControl('',
      [Validators.required]),
    birthMonth: new FormControl('',
      [Validators.required]),
    email: new FormControl('',
      [Validators.required,
        Validators.email]),
    password: new FormControl('',
      [Validators.required])
  });

  @Output() closePopUp = new EventEmitter();

  constructor(private authService: AuthService,
              private router: Router,
              private route : ActivatedRoute) {}

  ngOnInit() {
    const isLoggedIn = this.route.snapshot.data.isLoggedIn;
    if(isLoggedIn) this.router.navigate(['/app/me']);
  }

  closeJoinUpPopup(){
    this.closePopUp.emit();
  }
  
  onSubmit(){
    const newUser = {
      Name: this.joinUpForm.value.name,
      Surname: this.joinUpForm.value.surname,
      City: this.joinUpForm.value.city,
      GenderId: this.joinUpForm.value.gender === "male" ? 1 : 2,
      Email: this.joinUpForm.value.email,
      Password: this.joinUpForm.value.password,
      BirthYear: this.joinUpForm.value.birthYear,
      Birthday: this.joinUpForm.value.birthDay,
      BirthMonth: this.joinUpForm.value.birthMonth,
    };

    this.authService.joinUp(newUser).subscribe((res) => {
        if(res.status == 200){
          this.onRegistrationSuccessPopupVisibility = true;
        }
      }, error => {
      if(error.status == 409 && error.error == "Email is already taken"){
        this.joinUpForm.get('email').setErrors({'incorrect': true});
        this.emailInputAvailability = false;
      }
      else{
        this.emailInputAvailability = true;
      }
    })
  }
}
