import {Component, Input} from "@angular/core";
import {Passenger} from "../../models/passanger.interface";

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
      <div>
          <h3>Detail component</h3>
          <h3>Airline Passengers</h3>
          <ul>
              <li *ngFor="let passenger of items; let i = index;">
                  <span class="status"
                        [ngClass]="{ 'checked-in' : passenger.checkedIn}"></span>
                  {{i}} : {{passenger.name}}
                  <div class="children">
                      Children: {{ passenger.children?.length || 0}}
                  </div>
              </li>
          </ul>
      </div>
  `
})
export class PassengerDetailComponent{
  @Input()
  items: Passenger[];
  constructor() {
  }

}
