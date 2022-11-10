import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.css'],
})
export class CharityListComponent implements OnInit {
  @Input() foundationName: string = 'The National Children’s Cancer Society';
  @Input() number: string = '813-269-0955';
  @Input() location: string = '500 North Broadway, Suite 1850, St Louis MO 63102';
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

  constructor() {}

  ngOnInit(): void {}
}
