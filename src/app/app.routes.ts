import { Routes } from '@angular/router';
import { DialogLoginComponent } from './dialogs/dialog.login-component/dialog.login-component';
import { DialogSigninComponent } from './dialogs/dialog.signin-component/dialog.signin-component';
import { DialogAvatarSelectComponent } from './dialogs/dialog.avatar-select-component/dialog.avatar-select-component';

export const routes: Routes = [
  { path: 'login', component: DialogLoginComponent },
  { path: 'signin', component: DialogSigninComponent },
  { path: 'avatar-select', component: DialogAvatarSelectComponent },
];
