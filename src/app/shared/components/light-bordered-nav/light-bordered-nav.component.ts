import { Router } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-light-bordered-nav",
  templateUrl: "./light-bordered-nav.component.html",
  styleUrls: ["./light-bordered-nav.component.scss"]
})
export class LightBorderedNavComponent implements OnInit {
  @Input() links: {
    link: string;
    queryParams: any;
    text: string;
  }[];

  isLinkActive(i): boolean {
    const queryParams =
      this.links[i].queryParams &&
      Object.keys(this.links[i].queryParams)
        .map(key => key + "=" + this.links[i].queryParams[key])
        .join("&");
    const url =
      this.links[i].link + (queryParams != null ? "?" + queryParams : "");

    return this.router.url === url;
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}
