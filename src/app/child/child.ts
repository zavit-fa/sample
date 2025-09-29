import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child implements OnChanges {
  @Input()
  public data!: string

  ngOnChanges(changes: SimpleChanges) {
    
  }

}
