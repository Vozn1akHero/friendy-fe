import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {LocationService} from '../../services/location.service';
import {BehaviorSubject, fromEvent, ReplaySubject} from 'rxjs';
import {debounceTime, map, takeUntil} from 'rxjs/operators';
import City from '../../models/city.model';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss']
})
export class CityInputComponent implements OnInit, OnDestroy {
  @Input() value: City;
  @Input() styles;
  msBeforeRequest: number = 500;
  @ViewChild('inputElement') inputElement;
  destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  foundCities: City[];
  @Output() onCitySelectEmitter: EventEmitter<City> = new EventEmitter();
  resultsVisible: boolean;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    fromEvent(this.inputElement.nativeElement, 'keyup').pipe(
      takeUntil(this.destroyed$),
      map((i: any) => i.currentTarget.value),
      debounceTime(this.msBeforeRequest)
    ).subscribe(value => {
        this.locationService.getCitiesByKeyword(value)
          .pipe(takeUntil(this.destroyed$))
          .subscribe(res=> {
          this.foundCities =  res.body as Array<City>;
          this.resultsVisible = true;
      })
    });
  }

  ngOnDestroy(): void {
   this.destroyed$.next(true);
   this.destroyed$.complete();
  }

  onClick(city: City) {
    this.onCitySelectEmitter.emit(city);
    this.resultsVisible = false;
  }

  rewriteValue() {
    if(this.value!=null) {
      this.inputElement.nativeElement.value = this.value.title;
    }
  }
}
