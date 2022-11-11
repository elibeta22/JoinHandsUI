import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() foundationName: string = 'Foundation for Childhood Cancer';
  @Input() rating: number = 4.5;
  @Input() location: string = 'All 50 states';
  @Input() eligible: boolean = true;
  @Input() supportTypes: string[] = [
    'housing',
    'direct funds',
    'transportation',
  ];
  @Input() description: string = 'We support families by...';

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  routing(charityName: string) {
    this._router.navigate([`view-charity/${charityName}`]);
  }
}
