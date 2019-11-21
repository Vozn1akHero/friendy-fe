import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {
  @Input() panelContent = {
    title: null,
    icon: null,
    link: null,
    queryParams: null,
    marginTop: false
  };

  @Input() panelStyles = {
    width: '379px'
  };

  constructor(private router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
