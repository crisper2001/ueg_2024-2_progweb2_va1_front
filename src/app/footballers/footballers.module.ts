import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FootballersListComponent} from "./footballers-list/footballers-list.component";
import {FootballersFormComponent} from "./footballers-form/footballers-form.component";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    FootballersListComponent,
    FootballersFormComponent
  ]
})
export class FootballersModule { }
