import { Component, Input } from "@angular/core";
import {Passenger} from "../../models/passanger.interface";

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template:`
  <form>
      form!
      <div>
      {{ detail | json }}
      </div>
  </form>`
})
export class PassengerFormComponent{
  @Input()
  detail: Passenger;
  constructor() {}

}
