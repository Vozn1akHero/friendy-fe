import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import BaseData from '../../models/base-data.model';
import {BaseDataService} from '../../services/base-data.service';

@Component({
  selector: 'app-base-data-panel',
  templateUrl: './base-data-panel.component.html',
  styleUrls: ['./base-data-panel.component.scss']
})
export class BaseDataPanelComponent implements OnInit {
  baseData$: Observable<BaseData>;
  baseDataLoaded$: Observable<boolean>;
  @Input() id: number;

  constructor(private baseDataService : BaseDataService,
              private router: Router) { }

  ngOnInit() {
    this.getBaseData();
    this.baseData$ = this.baseDataService.baseData$;
    this.baseDataLoaded$ = this.baseDataService.loaded$;
  }

  getBaseData(){
    if(this.router.url.includes("profile")){
      this.baseDataService.getUserData(this.id)
    } else {
      this.baseDataService.getEventData(this.id)
    }
  }

  onBackBtnClick(){
    if(this.router.url.includes("profile")){
      this.router.navigate(['/app/profile', this.id])
    } else {
      this.router.navigate(['/app/event', this.id])
    }
  }
}