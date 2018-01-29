import { Component, EventEmitter, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';

export interface CalendarDate {
  mDate: moment.Moment;
  weekday: boolean;
  today?: boolean;
}

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.scss'],
})
export class CalendarMonthComponent implements OnInit {
  currentDate = moment();

  dayNames = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  weeks: CalendarDate[][] = [];

  constructor() {}

  ngOnInit(): void {
    this.generateCalendar();
  }

  // date checkers
  isToday(date: moment.Moment): boolean {
    return moment().isSame(moment(date), 'day');
  }

  isSelectedMonth(date: moment.Moment): boolean {
    return moment(date).isSame(this.currentDate, 'month');
  }

  // generate the calendar grid
  generateCalendar(): void {
    const dates = this.fillDates(this.currentDate);

    const weeks: CalendarDate[][] = [];

    while (dates.length > 0) {
      weeks.push(dates.splice(0, 7));
    }

    this.weeks = weeks;

    console.log(this.weeks);
  }

  fillDates(currentMoment: moment.Moment): CalendarDate[] {
    const firstOfMonth = moment(currentMoment)
      .startOf('month')
      .day();

    const firstDayOfGrid = moment(currentMoment)
      .startOf('month')
      .subtract(firstOfMonth, 'days');

    const start = firstDayOfGrid.date();
    let weekday;
    return _.range(start, start + 35).map((date: number): CalendarDate => {
      console.log(date);

      const d = moment(firstDayOfGrid).date(date);

      d.weekday() === 6 || d.weekday() === 0 ? (weekday = false) : (weekday = true);

      console.log(weekday);

      console.log(d);

      return {
        today: this.isToday(d),
        weekday: weekday,
        mDate: d,
      };
    });
  }
}
