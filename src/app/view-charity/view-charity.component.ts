import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-charity',
  templateUrl: './view-charity.component.html',
  styleUrls: ['./view-charity.component.css'],
})
export class ViewCharityComponent implements OnInit {
  @Input() foundationName: string | null =
    'The National Children’s Cancer Society';
  @Input() number: string = '813-269-0955';
  @Input() location: string =
    '500 North Broadway, Suite 1850, St Louis MO 63102';
  @Input() diagnosis: string = 'Brain Tumor, Leukemia, Sarcona';
  @Input() website: string = 'https://thenccs.org/financial-assistance';
  @Input() eligible: boolean = true;
  @Input() amountProvided: string = '$5000';
  @Input() locationSupported: string = 'All 50 States';
  @Input() affiliation: string = 'Hospital, research center';
  @Input() supportTypes: string[] = [
    'housing',
    'direct funds',
    'transportation',
  ];
  @Input() description: string = 'We support families by...';

  constructor(private _route: ActivatedRoute) {}
  ngOnInit() {
    this.foundationName = this._route.snapshot.paramMap.get('charityName');
  }
}
