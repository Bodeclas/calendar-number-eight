import { NgModule } from '@angular/core';
import { SelectDateLayoutComponent } from './components/select-date-layout/select-date-layout.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [SelectDateLayoutComponent],
  exports: [SelectDateLayoutComponent],
})
export class SelectDateModule {}
