import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-backdrop-component',
  imports: [RouterModule, CommonModule],
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

  constructor(public router: Router) {}

  get showFooter(): boolean {
    return this.footerVisibleOnRoutes.some(route => this.router.url.includes(route))
  }


}
