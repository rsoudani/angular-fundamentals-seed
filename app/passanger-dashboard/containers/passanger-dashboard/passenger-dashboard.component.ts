import {Component, OnInit} from "@angular/core";
import {Passenger} from "../../models/passanger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
      <div>
          <passenger-count [items]="passengers"></passenger-count>
          <passenger-detail [items]="passengers"></passenger-detail>
      </div>
  `
})
export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[];
  constructor(){};
  ngOnInit(): void {
    console.log("OnInit")
    this.passengers =
      [{
        id: 1, name: "aaa", checkedIn: false,
        children: null
      }, {
        id: 2, name: "Dom", checkedIn: true,
        children: null
      }, {
        id: 3, name: "Mikolaj", checkedIn: true,
        children: [
          {name: 'ted', age: 12},
          {name: 'Max', age: 11}
        ]
      }, {
        id: 4, name: "Stephen", checkedIn: false
      }, {
        id: 5, name: "James", checkedIn: false,
        children: [
          {name: 'Jessica', age: 8}
        ]
      }, {
        id: 6, name: "Rose", checkedIn: true
      }
      ];
  }




}