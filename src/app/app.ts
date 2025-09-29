import { Component, signal } from '@angular/core';

import { Child } from './child/child';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Child, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('version-19');
  public data = "data"

  clickButton() {
    this.data = "change"
  }
}
