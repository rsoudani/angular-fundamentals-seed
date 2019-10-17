import {Component, Input} from "@angular/core";
import {Passenger} from "../../models/passanger.interface";

@Component({
  selector: 'passenger-count',
  styleUrls: ['passenger-count.component.scss'],
  template: `
  <div>
      <h3>count component</h3>
      Total checked in {{checkedIn()}} / {{items.length}}
  </div>
  `
})
export class PassengerCountComponent{
  @Input()
  items: Passenger[];
  checkedIn(): number{
    if (!this.items) return;
    return  this.items.filter((item: Passenger) => item.checkedIn).length;
  }

}
