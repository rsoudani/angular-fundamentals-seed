import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

//Containers
import {PassengerDashboardComponent} from "./containers/passanger-dashboard/passenger-dashboard.component";

//Components
import {PassengerCountComponent} from "./components/passenger-count/passenger-count.component";
import {PassengerDetailComponent} from "./components/passenger-detail/passenger-detail.component";


@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  exports:[
    PassengerDashboardComponent,
  ],
  imports: [
    CommonModule,
  ]

})
export class PassengerDashboardModule{

}
