import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

//Containers
import {PassengerDashboardComponent} from "./containers/passanger-dashboard/passenger-dashboard.component";
import {PassengerViewerComponent} from "./containers/passenger-viewer/passenger-viewer.component";

//Components
import {PassengerCountComponent} from "./components/passenger-count/passenger-count.component";
import {PassengerDetailComponent} from "./components/passenger-detail/passenger-detail.component";

//service
import {PassengerDashboardService} from "./passenger-dashboard.service";


@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  exports: [
    PassengerViewerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PassengerDashboardService
  ]

})
export class PassengerDashboardModule{

}
