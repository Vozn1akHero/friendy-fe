import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from "@angular/router"
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import {animate, group, query, style, transition, trigger} from '@angular/animations';

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

export class MainpageComponent implements OnInit {
  width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

  height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  constructor(private router : Router, private elementRef: ElementRef, private authService: AuthService) {
    if(this.authService.isLoggedIn()) { 
      this.router.navigate(['app']);
    }
   }

  ngOnInit() {
    
  }

  moveBubbles($event){
      let bubbles = (document.querySelector('.bubbles svg')  as HTMLElement);
      bubbles.style.position = 'absolute';
      bubbles.style.width = '100vw';
      bubbles.style.transition = 'all .3s;';
      bubbles.style.bottom = String(($event.clientY / this.height) * 100) + 'px';
      bubbles.style.right = String(($event.clientX / this.width) * 100) + 'px';
  }
}
