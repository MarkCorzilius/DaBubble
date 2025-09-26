import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSigninComponent } from '../dialogs/dialog.signin-component/dialog.signin-component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-backdrop-component',
  imports: [MatIconModule],
  templateUrl: './backdrop-component.html',
  styleUrl: './backdrop-component.scss'
})
export class BackdropComponent {

    constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogSigninComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
