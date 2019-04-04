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

}
