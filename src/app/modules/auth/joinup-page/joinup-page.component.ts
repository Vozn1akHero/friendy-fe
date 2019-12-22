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

export class JoinUpPageComponent implements OnInit {
  emailInputAvailability = true;
  onRegistrationSuccessPopupVisibility = false;
  calendarVisible = false;
  poorPassword = false;
  passwordRegex = {
    lowerCaseCh: new RegExp("([a-z]+)"),
    upperCaseCh: new RegExp("([A-Z]+)"),
    numericCh: new RegExp("([0-9]+)"),
    specialCh: new RegExp("([/\\W|_]+)")
  };
  passwordErrors = {
    lowerCaseCh: "Hasło powinno zawierać przynajmniej jedną małą literę",
    upperCaseCh: "Hasło powinno zawierać przynajmniej jedną dużą literę",
    numericCh: "Hasło powinno zawierać przynajmniej jedną liczbę",
    specialCh: "Hasło powinno zawierać przynajmniej jeden znak specjalny",
    length: "Hasło powinno zawierać przynajmniej 8 znaków"
  };
  passwordInputErrors = [];

  joinUpForm = new FormGroup({
    name: new FormControl('',
      [Validators.required]),
    surname: new FormControl('',
      [Validators.required]),
    city: new FormControl('',
      [Validators.required]),
    gender: new FormControl('',
      [Validators.required]),
    birthday: new FormControl('',
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
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn(){
    const isLoggedIn = this.route.snapshot.data.isLoggedIn;
    if(isLoggedIn) this.router.navigate(['/app/profile']);
  }
  
  onSubmit(){
    const newUser = {
      name: this.joinUpForm.value.name,
      surname: this.joinUpForm.value.surname,
      city: this.joinUpForm.value.city,
      birthday: this.joinUpForm.value.birthday,
      genderId: this.joinUpForm.value.gender === "male" ? 1 : 2,
      email: this.joinUpForm.value.email,
      password: this.joinUpForm.value.password
    };

    this.authService.joinUp(newUser).subscribe((res) => {
        if(res.status == 200){
          this.onRegistrationSuccessPopupVisibility = true;
        }
      }, error => {
      if(error.status == 409 && error.error == "Email is already taken"){
        this.joinUpForm.get('email').setErrors({'invalid': true});
        this.emailInputAvailability = false;
      }
      else{
        this.emailInputAvailability = true;
      }
    })
  }

  setCalendarVisible() {
    this.calendarVisible = true;
  }

  setCalendarInvisible() {
    this.calendarVisible = false;
  }

  onSelectDateEvent($event) {
    this.joinUpForm.controls['birthday'].setValue($event, { onlySelf: true });
    this.setCalendarInvisible();
  }

  checkPassword() {
    this.passwordInputErrors = [];
    const password = this.joinUpForm.get("password").value;
    if(!this.passwordRegex.lowerCaseCh.test(password)
      || !this.passwordRegex.upperCaseCh.test(password)
      || !this.passwordRegex.numericCh.test(password)
      || !this.passwordRegex.specialCh.test(password)
      || password.length < 8) {
      if (!this.passwordRegex.lowerCaseCh.test(password)) {
        this.passwordInputErrors.push(this.passwordErrors.lowerCaseCh);
      }
      if (!this.passwordRegex.upperCaseCh.test(password)) {
        this.passwordInputErrors.push(this.passwordErrors.upperCaseCh);
      }
      if (!this.passwordRegex.numericCh.test(password)) {
        this.passwordInputErrors.push(this.passwordErrors.numericCh);
      }
      if (!this.passwordRegex.specialCh.test(password)) {
        this.passwordInputErrors.push(this.passwordErrors.specialCh);
      }
      if(password.length < 8){
        this.passwordInputErrors.push(this.passwordErrors.length);
      }
      this.joinUpForm.controls['password'].setErrors({'invalid': true});
    }
  }
}
