import { NgModule } from '@angular/core';
import { CalendarMonthComponent } from './components/calendar-month/calendar-month.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [CalendarMonthComponent],
  exports: [CalendarMonthComponent],
})
export class CalendarModule {}
