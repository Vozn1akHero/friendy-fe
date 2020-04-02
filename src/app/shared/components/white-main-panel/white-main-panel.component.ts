import { Component, Input } from "@angular/core";

@Component({
  selector: "app-white-main-panel",
  templateUrl: "./white-main-panel.component.html",
  styleUrls: ["./white-main-panel.component.scss"]
})
export class WhiteMainPanelComponent {
  @Input() title: string;
  @Input() width: string;
}
