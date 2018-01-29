import { NgModule } from '@angular/core';
import { HomeComponent } from './views/home.component';
import { HomeRoutingModule } from './home.routing';
import { SelectDateModule } from '../select-date/select-date.module';
import { CalendarModule } from '../calendar/calendar.module';

@NgModule({
  imports: [HomeRoutingModule, SelectDateModule, CalendarModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
