import {Component, OnInit} from "@angular/core";
import {Passenger} from "../../models/passanger.interface";
import {PassengerDashboardService} from "../../passenger-dashboard.service";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
      <div>
          <passenger-count
                  [items]="passengers">
          </passenger-count>
          <div *ngFor="let passenger of passengers">
              {{passenger.name}}
          </div>
          <passenger-detail
                  *ngFor="let passenger of passengers"
                  [detail]="passenger"
                  (remove)="onRemove($event)"
                  (edit)="handleEdit($event)"
          >
          </passenger-detail>
      </div>
  `

})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(private passengerDashboardService: PassengerDashboardService) {
  };

  ngOnInit(): void {
    console.log("OnInit")
    this.passengerDashboardService
      .getPassengers()
      .subscribe( (data: Passenger[]) => this.passengers = data);

  }


  onRemove(event: Passenger) {
    this.passengerDashboardService
      .deletePassenger(event)
      .subscribe(
        ( passenger: Passenger) => {
          this.passengers = this.passengers.filter(
            (passenger: Passenger) => passenger.id !== event.id
          )
        }
      )

  }

  handleEdit(event: Passenger) {
    this.passengerDashboardService.updatePassenger(event)
      .subscribe( (data : Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if(passenger.id === event.id){
            passenger = Object.assign({}, passenger, event)
          }
          return passenger;
        });
      });

    console.log(this.passengers);
  }
}
