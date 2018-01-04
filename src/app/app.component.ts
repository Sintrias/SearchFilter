import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Search Filter';
  player;
  onReady(player): void {
    this.player = player;
  }

  onChange(event): void {
    console.log(event)
  }
}
