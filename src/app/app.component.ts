import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild
} from "@angular/core";
import * as moment from "moment";
import "moment/locale/pl";
import { InfoModalService } from "./shared/components/info-modal/info-modal.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("appWrapper") appWrapper;
  infoModalOpened$: Observable<boolean>;

  constructor(private infoModalService: InfoModalService) {
    moment.locale("pl");
  }

  ngOnInit(): void {
    this.infoModalOpened$ = this.infoModalService.opened$;
    document.addEventListener("click", e => {
      const el = e.target as HTMLElement;
      if (!el.classList.contains("fr-popover")) {
        const popovers = document.getElementsByClassName("fr-popover");
        if (popovers.length > 0) {
          [].slice.call(popovers).map(value => {
            value.style.display = "none";
          });
        }
      }
    });
  }
}
