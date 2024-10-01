import {Routes} from '@angular/router';
import {FootballersListComponent} from "./footballers/footballers-list/footballers-list.component";
import {FootballerResolve} from "./footballers/shared/footballer.resolve";
import {FootballersFormComponent} from "./footballers/footballers-form/footballers-form.component";

export const routes: Routes = [
  {
    path: '', component: FootballersListComponent,
    resolve: {footballerData: FootballerResolve}
  },
  {
    path: 'new', component: FootballersFormComponent
  },
  {
    path: 'edit/:id', component: FootballersFormComponent
  }
];
