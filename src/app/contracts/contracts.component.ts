import { Component, OnInit } from '@angular/core';
import { Contract } from '../contract';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  contract: Contract = {
    street: '',
    postalCode: '',
    city: '',
    surfaceArea: '',
    insuranceLevel: ''
  };

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.contract);

  }

}
