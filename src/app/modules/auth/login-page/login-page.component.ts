import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {animate, style, transition, trigger} from '@angular/animations';
import {AuthService} from '../../../core/auth/auth.service';
import {Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
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
      ]), transition(':leave', [
        style({
          opacity: '1'
        }),
        animate(
          '300ms ease-out',
          style({ opacity: '0' })
        )
      ])
    ])
  ]
})
export class LoginPageComponent implements OnInit {
  incorrectAuthData = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  @Output() closePopUp = new EventEmitter();

  constructor(private authService: AuthService, private router: Router) {
    let $userAuthStatus = this.authService.isLoggedIn();
    $userAuthStatus.subscribe(res => {
      if(res.status == 200){
        this.router.navigate(['app']);
      }
    }, error => {

    });
  }

  ngOnInit() {
  }

  onLoginFormSubmit(){
    let userEmail = this.loginForm.get('email').value;
    let userPassword = this.loginForm.get('password').value;

    this.authService.logIn(userEmail, userPassword)
    .subscribe(data => {
      localStorage.setItem('SESSION_HASH', data.sessionHash);
      this.router.navigate(['/app']);
    }, err => {
      this.incorrectAuthData = true;
    });
  }
}
