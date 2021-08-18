import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {ToDoComponent} from './to-do/to-do.component';
import {PlaygroundComponent} from './playground/playground.component';
import {ConverterComponent} from './converter/converter.component';
import {CheatsheetsComponent} from './cheatsheets/cheatsheets.component';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'to-do',
    component: ToDoComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'playground',
    component: PlaygroundComponent
  },
  {
    path: 'converter',
    component: ConverterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cheatsheets',
    component: CheatsheetsComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
