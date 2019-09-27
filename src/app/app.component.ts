import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './core/auth/auth.service';
import {Store} from '@ngrx/store';
import * as fromApp from './core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {

  }
}
