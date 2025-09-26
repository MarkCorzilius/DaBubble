import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogSigninComponent } from '../dialogs/dialog.signin-component/dialog.signin-component';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-backdrop-component',
  imports: [MatIconModule, RouterModule, CommonModule],
  templateUrl: './backdrop-component.html',
  styleUrl: './backdrop-component.scss',
})
export class BackdropComponent {
  private footerVisibleOnRoutes = [
    '/login',
    '/signin',
    '/forgot-password',
    '/reset-password',
    '/avatar-select',
  ];

  constructor(public router: Router, public dialog: MatDialog) {}

  get showFooter(): boolean {
    return this.footerVisibleOnRoutes.some(route => this.router.url.includes(route))
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogSigninComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
