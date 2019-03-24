import { Component, OnInit, Renderer, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private _myProfile : boolean = true;

  private _activeSettings : boolean = false; 

  private _showComments : boolean = true;

  newPost : FormGroup = new FormGroup({
    newMessageContent: new FormControl('', [Validators.required, Validators.minLength(1)]),
    image: new FormControl('')
  });
  
  constructor(private renderer: Renderer2, private elem: ElementRef) { }

  

  ngOnInit() {
  }

  createPost(){
    
  }

  openProfileInnerSettings(activeSettings : boolean):void{
    //this._activeSettings = this._activeSettings == true ? false : true;
    this._activeSettings = activeSettings;

    if(this._activeSettings){
      this.renderer.setStyle((document.querySelector(".profile__user-info__avatar img") as HTMLBaseElement), 'filter', 'blur(5px)');
      
      this.renderer.setStyle((document.querySelector(".profile__bg figure img") as HTMLBaseElement), 'filter', 'blur(5px)');
      this.renderer.setStyle((document.querySelector(".profile__bg figure img") as HTMLBaseElement), 'transform', 'scale(1.1)');
    }
    else{
      this.renderer.setStyle((document.querySelector(".profile__user-info__avatar img") as HTMLBaseElement), 'filter', 'blur(0px)');

      this.renderer.setStyle((document.querySelector(".profile__bg figure img") as HTMLBaseElement), 'filter', 'blur(0px)');
      this.renderer.setStyle((document.querySelector(".profile__bg figure img") as HTMLBaseElement), 'transform', 'scale(1)');
    }
  }

}
