import { map } from "rxjs/operators";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { BaseData } from "./base-data.model";
import { BaseDataService } from "./base-data.service";

@Component({
  selector: "app-base-data-panel",
  templateUrl: "./base-data-panel.component.html",
  styleUrls: ["./base-data-panel.component.scss"]
})
export class BaseDataPanelComponent implements OnInit {
  baseData$: Observable<BaseData>;
  baseDataLoaded$: Observable<boolean>;
  @Input() id: number;

  constructor(
    private baseDataService: BaseDataService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.router.url.includes("profile")) {
      this.baseDataService.getUserData(this.id);
      this.baseData$ = this.baseDataService
        .getUserDataById(this.id)
        .pipe(map(val => val.entry));
      this.baseDataLoaded$ = this.baseDataService.getUserDataById(this.id).pipe(
        map(val => {
          if (val == null) return false;
          else return val.loaded;
        })
      );
    } else {
      this.baseDataService.getEventData(this.id);
      this.baseData$ = this.baseDataService
        .getEventDataById(this.id)
        .pipe(map(val => val.entry));
      this.baseDataLoaded$ = this.baseDataService
        .getEventDataById(this.id)
        .pipe(
          map(val => {
            if (val == null) return false;
            else return val.loaded;
          })
        );
    }
  }

  onBackBtnClick() {
    if (this.router.url.includes("profile")) {
      this.router.navigate(["/app/profile", this.id]);
    } else {
      this.router.navigate(["/app/event", this.id]);
    }
  }
}
