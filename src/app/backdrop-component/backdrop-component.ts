import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSigninComponent } from '../dialogs/dialog.signin-component/dialog.signin-component';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-backdrop-component',
  imports: [MatIconModule, RouterModule, CommonModule],
  templateUrl: './backdrop-component.html',
  styleUrl: './backdrop-component.scss',
})
export class BackdropComponent {}
