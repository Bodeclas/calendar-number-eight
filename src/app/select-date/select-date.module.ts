import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDateFormComponent } from './containers/select-date-form/select-date-form.component';
import { SelectDateLayoutComponent } from './components/select-date-layout/select-date-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SelectDateFormComponent, SelectDateLayoutComponent],
})
export class SelectDateModule {}
