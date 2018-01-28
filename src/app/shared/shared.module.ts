import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';

const modules = [CommonModule, MaterialModule, RouterModule, FormsModule, ReactiveFormsModule];
const components = [NavComponent];

@NgModule({
  imports: [modules],
  declarations: [components],
  exports: [modules, components],
})
export class SharedModule {}
