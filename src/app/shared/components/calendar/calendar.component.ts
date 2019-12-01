import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as moment from 'moment'
import {Moment} from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Output() onSelectDateEvent: EventEmitter<string> = new EventEmitter();

  daysInCurMonth: number;
  firstDayOfMonth: number;
  //chosenDate: Date;
  chosenDate: string;
  chosenDay: number;
  chosenMonth: number;
  chosenMonthText: string;
  chosenYear: number;
  //readonly startDate: Date = moment(new Date(), "DD.MM.YYYY").toDate();
  readonly startDate = moment().format("DD.MM.YYYY");
  daysOfMonth: [[{ number: number, title: string, date: Moment }]];

  constructor() {
    this.setStartState();
  }

  ngOnInit() {

  }

  setStartState(){
    this.chosenDate = this.startDate;
    this.setAddtValues();
  }

  setAddtValues(){
    this.daysInCurMonth = moment(this.chosenDate, "DD.MM.YYYY").daysInMonth();
    this.firstDayOfMonth = moment(this.chosenDate, "DD.MM.YYYY").startOf('month').weekday() + 1;
    this.chosenYear = moment(this.chosenDate, "DD.MM.YYYY").year();
    this.chosenMonth = moment(this.chosenDate, "DD.MM.YYYY").month();
    this.chosenDay = moment(this.chosenDate, "DD.MM.YYYY").day();
    this.chosenMonthText = moment().month(this.chosenMonth).format('MMMM');
    this.daysOfMonth = this.divideArray();
  }

  divideArray(){
    let days = this.daysInCurMonth;
    let daysN = Array.from({length: days}, (v, k) => k+1);

    let daysOfWeek = [];
    let daysOfMonth = [];

    let emptyElArr = Array.from({ length: this.firstDayOfMonth-1 }, (v, k) => k + 1);

    if(this.firstDayOfMonth!=1){
      emptyElArr.forEach(() => {
        daysOfWeek.push(null);
      });
    }

    daysN.forEach((value, index) => {
      let curDayIndex = emptyElArr.length > 0 ? index + emptyElArr.length : index + 1; //+1
      //new week
      if(curDayIndex % 7 !== 0){
        const date = moment(new Date(this.chosenYear, this.chosenMonth, value), "DD.MM.YYYY");
        const chosenDay = date.format('dd');
        daysOfWeek.push({
          number: value,
          title: chosenDay,
          date
        });
      } else if(curDayIndex % 7 === 0){
        daysOfMonth.push(daysOfWeek);
        daysOfWeek = [];
        const date = moment(new Date(this.chosenYear, this.chosenMonth, value), "DD.MM.YYYY");
        const chosenDay = date.format('dd');
        daysOfWeek.push({
          number: value,
          title: chosenDay,
          date
        });
      }

      if(index + 1 - days === 0){
        if(daysOfWeek.length === 0){
          const date = moment(new Date(this.chosenYear, this.chosenMonth, value), "DD.MM.YYYY");
          const chosenDay = date.format('dd');
          daysOfWeek.push({
            number: value,
            title: chosenDay,
            date
          });
        }
        daysOfMonth.push(daysOfWeek);
      }
    });

    return daysOfMonth as [[{ number: number, title: string, date: Moment }]];
  }

  setPreviousMonth(){
    this.chosenDate = moment(this.chosenDate, "DD.MM.YYYY")
      .subtract(1, 'months').format("DD.MM.YYYY");
    this.setAddtValues();
  }

  setNextMonth(){
    this.chosenDate = moment(this.chosenDate, "DD.MM.YYYY")
      .add(1, 'months').format("DD.MM.YYYY");
    this.setAddtValues();
  }

  setPreviousYear(){
    this.chosenDate = moment(this.chosenDate, "DD.MM.YYYY")
      .subtract(1, 'years').format("DD.MM.YYYY");
    this.setAddtValues();
  }

  setNextYear(){
    this.chosenDate = moment(this.chosenDate, "DD.MM.YYYY")
      .add(1, 'years').format("DD.MM.YYYY");
    this.setAddtValues();
  }

  onDateSelect(day:{ number: number, title: string, date: Moment }){
    this.onSelectDateEvent.emit(day.date.format("DD.MM.YYYY"));
  }
}
