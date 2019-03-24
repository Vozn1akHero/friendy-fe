import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-wholeness',
  templateUrl: './wholeness.component.html',
  styleUrls: ['./wholeness.component.scss']
})
export class WholenessComponent implements OnInit {

  constructor(private router: Router, private _authService: AuthService) { }

  ngOnInit() {
    //this.router.navigate(['app/home']);
  }

  logOut():void{
    this._authService.logOut();
  }

}
