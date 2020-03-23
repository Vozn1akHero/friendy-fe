import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";
import { UserIdService } from "../../shared/services/user-id.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  profileId$: Observable<number>;

  constructor(
    private router: Router,
    private userIdService: UserIdService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.profileId$ = this.userIdService.userId$;
  }

  showNotifications() {}

  logOut(): void {
    this.authService.logOut();
  }
}
