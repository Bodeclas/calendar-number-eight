import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatButtonModule,
];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class MaterialModule {}
