import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from "@angular/router"
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  joinUpFormVisibility: Boolean = false;
  logInFormVisibility: Boolean = false;

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

  AfterViewInit(){
    /*this.elementRef.nativeElement.querySelector('.main-page').addEventListener('onmousemove ', () => {
      console.log(1);
    });*/
  }

  moveBubbles($event){
      let bubbles = (document.querySelector('.bubbles svg')  as HTMLElement);
      bubbles.style.position = 'absolute';
      bubbles.style.width = '100vw';
      bubbles.style.transition = 'all .3s;';
      bubbles.style.bottom = String(($event.clientY / this.height) * 100) + 'px';
      bubbles.style.right = String(($event.clientX / this.width) * 100) + 'px';
  }


  navigateToJoinUp(){
    this.joinUpFormVisibility = true;
  }

  closeJoinUpPopup(){
    this.joinUpFormVisibility = false;
  }

  openLogInPopup(){
    this.logInFormVisibility = true;
  }

  closeLoginPopup(){
    this.logInFormVisibility = false;
  }

}
