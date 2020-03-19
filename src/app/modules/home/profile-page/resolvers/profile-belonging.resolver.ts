import { Injectable } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve
} from "@angular/router";
import { UserIdService } from "src/app/shared/services/user-id.service";

@Injectable()
export class ProfileBelongingResolver implements Resolve<boolean> {
  constructor(private userIdService: UserIdService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.userIdService.userIdValue === +route.paramMap.get("id");
  }
}
