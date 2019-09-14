import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  sendMessage(message: FormGroup){
    console.log(message.value);
  }
}
