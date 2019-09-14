import {Component, OnInit, AfterViewInit, ElementRef, OnDestroy} from '@angular/core';
import { Router } from "@angular/router"
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import {animate, group, query, style, transition, trigger} from '@angular/animations';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../core/ngrx/store/app.reducer';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
  animations: [
    trigger('anim', [
      transition(':enter', [
          style({
            opacity: '0'
          }),
          animate(
            '300ms ease-in',
            style({ opacity: '1' })
          )]),
      transition(':leave', [
        style({
          opacity: '1'
        }),
        animate(
          '300ms ease-out',
          style({ opacity: '0' })
        )])
    ])
  ]
})

export class MainpageComponent implements OnInit, OnDestroy {
  private authServiceSubscription : Subscription;


  constructor(private router : Router,
              private authService: AuthService) {
    this.authServiceSubscription = this.authService.isLoggedIn().subscribe(res => {
      if (res.status == 200) {
        return this.router.navigate(['/app'])
      }
    });
  }

  ngOnInit() {

  }

  ngOnDestroy(){
    this.authServiceSubscription.unsubscribe();
  }
}
