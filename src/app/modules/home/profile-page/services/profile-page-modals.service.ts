import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilePageModalsService {
  newAvatar: File;
  newAvatarModalOpened: boolean;

  toggleNewAvatarModal(){
    this.newAvatarModalOpened = !this.newAvatarModalOpened;
  }

  constructor(){
  }
}
