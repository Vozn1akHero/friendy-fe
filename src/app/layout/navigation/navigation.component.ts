import { Component, OnInit } from "@angular/core";
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
