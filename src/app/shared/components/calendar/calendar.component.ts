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
  chosenDate: string;
  chosenDay: number;
  chosenMonth: number;
  chosenMonthText: string;
  chosenYear: number;
  readonly startDate = moment().format("YYYY-MM-DD");
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
    this.daysInCurMonth = moment(this.chosenDate, "YYYY-MM-DD").daysInMonth();
    this.firstDayOfMonth = moment(this.chosenDate, "YYYY-MM-DD").startOf('month').weekday() + 1;
    this.chosenYear = moment(this.chosenDate, "YYYY-MM-DD").year();
    this.chosenMonth = moment(this.chosenDate, "YYYY-MM-DD").month();
    this.chosenDay = moment(this.chosenDate, "YYYY-MM-DD").day();
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
        const date = moment(new Date(this.chosenYear, this.chosenMonth, value), "YYYY-MM-DD");
        const chosenDay = date.format('dd');
        daysOfWeek.push({
          number: value,
          title: chosenDay,
          date
        });
      } else if(curDayIndex % 7 === 0){
        daysOfMonth.push(daysOfWeek);
        daysOfWeek = [];
        const date = moment(new Date(this.chosenYear, this.chosenMonth, value), "YYYY-MM-DD");
        const chosenDay = date.format('dd');
        daysOfWeek.push({
          number: value,
          title: chosenDay,
          date
        });
      }

      if(index + 1 - days === 0){
        if(daysOfWeek.length === 0){
          const date = moment(new Date(this.chosenYear, this.chosenMonth, value), "YYYY-MM-DD");
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
    this.chosenDate = moment(this.chosenDate, "YYYY-MM-DD")
      .subtract(1, 'months').format("YYYY-MM-DD");
    this.setAddtValues();
  }

  setNextMonth(){
    this.chosenDate = moment(this.chosenDate, "YYYY-MM-DD")
      .add(1, 'months').format("YYYY-MM-DD");
    this.setAddtValues();
  }

  setPreviousYear(){
    this.chosenDate = moment(this.chosenDate, "YYYY-MM-DD")
      .subtract(1, 'years').format("YYYY-MM-DD");
    this.setAddtValues();
  }

  setNextYear(){
    this.chosenDate = moment(this.chosenDate, "YYYY-MM-DD")
      .add(1, 'years').format("YYYY-MM-DD");
    this.setAddtValues();
  }

  onDateSelect(day:{ number: number, title: string, date: Moment }){
    console.log(1, day.date.format("YYYY-MM-DD"))
    this.onSelectDateEvent.emit(day.date.format("YYYY-MM-DD"));
  }
}
