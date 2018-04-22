import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;

  starWidth: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * (86 / 5);
  }

  ngOnInit() {}
}
