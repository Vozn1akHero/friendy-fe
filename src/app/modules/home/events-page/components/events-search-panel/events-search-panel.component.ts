import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import EventSearchCriteriaModel from '../../models/event-search-criteria.model';
import {EventSearchService} from '../../services/event-search.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivatedSectionService} from '../../services/activated-section.service';

@Component({
  selector: 'app-events-search-panel',
  templateUrl: './events-search-panel.component.html',
  styleUrls: ['./events-search-panel.component.scss']
})
export class EventsSearchPanelComponent implements OnInit {
  @ViewChild('panel') panel : ElementRef;
  @ViewChild('toggleBtn') toggleBtn : ElementRef;
  @ViewChild('formControls') formControls : ElementRef;
  eventSearchPanelExpanded: boolean = false;

  searchForm = new FormGroup({
    title: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
    streetNumber: new FormControl(''),
    entryPriceMin: new FormControl(''),
    entryPriceMax: new FormControl(''),
    participantsAmountMin: new FormControl(''),
    participantsAmountMax: new FormControl(''),
    date: new FormControl('')
  });

  onSubmit() {
    const formValue = this.searchForm.value;
    const searchEventDto = new EventSearchCriteriaModel(formValue.title,
      formValue.city,
      formValue.street,
      formValue.streetNumber,
      formValue.entryPriceMin,
      formValue.entryPriceMax,
      formValue.participantAmountMin,
      formValue.participantAmountMax,
      formValue.date);
    this.eventSearchService.filterByCriteria(searchEventDto).subscribe();
    this.activatedSectionService.setNonparticipatingEvents();
  }

  constructor(private eventSearchService : EventSearchService,
              private activatedSectionService : ActivatedSectionService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.panel.nativeElement.style.boxShadow = '0 0px 6px 0px rgba(0, 0, 0, 0.1)';
    this.panel.nativeElement.style.toggleBtn = '0 0px 6px 0px rgba(0, 0, 0, 0.1)';
  }

  onToggleBtnClick(){
    if(this.eventSearchPanelExpanded) {
      this.panel.nativeElement.style.width = '2rem';
      this.panel.nativeElement.style.boxShadow = '0 0px 6px 0px rgba(0, 0, 0, 0.1)';
      this.panel.nativeElement.style.toggleBtn = '0 0px 6px 0px rgba(0, 0, 0, 0.1)';
      this.eventSearchPanelExpanded = false;
      this.formControls.nativeElement.style.visibility='hidden';
    } else {
      this.panel.nativeElement.style.width = '492px';
      this.panel.nativeElement.style.boxShadow = 'none';
      this.panel.nativeElement.style.toggleBtn = 'none';
      this.eventSearchPanelExpanded = true;
      this.formControls.nativeElement.style.visibility='visible';
    }
  }

}
