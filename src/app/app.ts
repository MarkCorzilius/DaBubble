import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackdropComponent } from './backdrop-component/backdrop-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackdropComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dabubble');
}
