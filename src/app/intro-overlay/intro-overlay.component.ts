import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro-overlay',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './intro-overlay.component.html',
  styleUrls: ['./intro-overlay.component.scss']
})
export class IntroOverlayComponent {
  @Output() done = new EventEmitter<void>();

  ngOnInit() {
  const total = 4500; 
  setTimeout(() => this.done.emit(), total);
}

}