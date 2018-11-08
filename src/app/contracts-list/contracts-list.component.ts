import { Component, OnInit } from '@angular/core';
import { Contract } from '../contract';
import { CONTRACTS } from '../mock-contracts';

@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.component.html',
  styleUrls: ['./contracts-list.component.css']
})
export class ContractsListComponent implements OnInit {

  contracts = CONTRACTS;
  selectedContract: Contract;

  constructor() { }

  ngOnInit() {
  }

  onSelect(contract: Contract): void {
    this.selectedContract = contract;
  }

}
