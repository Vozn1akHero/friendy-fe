import {Component, OnInit, EventEmitter, Output, AfterViewInit, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {animate, style, transition, trigger} from '@angular/animations';
import {AuthService} from '../../../core/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {Subscription} from 'rxjs';
import SubscriptionManager from '../../../shared/helpers/SubscriptionManager';

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
export class LoginPageComponent implements OnInit, OnDestroy {
  incorrectAuthData = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  @Output() closePopUp = new EventEmitter();

  constructor(private authService: AuthService,
              private router: Router,
              private subscriptionManager : SubscriptionManager,
              private route : ActivatedRoute) {
    this.isLoggedIn();
  }

  ngOnInit() {}

  isLoggedIn(){
    const isLoggedIn = this.route.snapshot.data.isLoggedIn;
    if(isLoggedIn) this.router.navigate(['/app/profile']);
  }

  onLoginFormSubmit(){
    let userEmail = this.loginForm.get('email').value;
    let userPassword = this.loginForm.get('password').value;

    this.subscriptionManager.add(this.authService.logIn(userEmail, userPassword)
    .subscribe(data => {
      //localStorage.setItem('SESSION_HASH', data.sessionHash);
      this.router.navigate(['/app/profile']);
    }, err => {
      this.incorrectAuthData = true;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
