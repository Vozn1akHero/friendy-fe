import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation-panel",
  templateUrl: "./navigation-panel.component.html",
  styleUrls: ["./navigation-panel.component.scss"]
})
export class NavigationPanelComponent {
  links: {
    link: string;
    queryParams: any;
    text: string;
  }[] = [
    { link: "/app/friends", queryParams: null, text: "Wszyscy znajomi" },
    {
      link: "/app/friends",
      queryParams: { act: "sent-friend-requests" },
      text: "Wysłane zaproszenia do znajomych"
    },
    {
      link: "/app/friends",
      queryParams: { act: "received-friend-requests" },
      text: "Otrzymane zaproszenia do znajomych"
    },
    {
      link: "/app/friends",
      queryParams: { act: "search" },
      text: "Wyszukiwanie znajomych"
    }
  ];
}
