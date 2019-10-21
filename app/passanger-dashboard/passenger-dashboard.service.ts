import {Passenger} from "./models/passanger.interface";
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService{

  constructor(private http: Http){
    console.log(http);
  }

  getPassengers(): Observable<Passenger[]>{
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json());
  }

  getPassenger(id: number): Observable<Passenger>{
    return this.http
      .get(`${PASSENGER_API}/${id}`)
      .map((response: Response) => response.json());
  }

  updatePassenger(passenger: Passenger): Observable<Passenger>{
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger)
      .map((response: Response) => response.json());
  }

  deletePassenger(passenger: Passenger): Observable<Passenger>{
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response.json());
  }
}
