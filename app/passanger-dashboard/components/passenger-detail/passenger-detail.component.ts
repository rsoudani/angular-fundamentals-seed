import {Component, Input, OnChanges, Output, EventEmitter} from "@angular/core";
import {Passenger} from "../../models/passanger.interface";

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
      <div>
                  <span class="status"
                        [ngClass]="{ 'checked-in' : detail.checkedIn}"></span>
          <div *ngIf="editing">
              <input
                      type="text"
                      [value]="detail.name"
                      (input)="onNameChange(name.value)"
                      #name
              >
          </div>
          <div *ngIf="!editing">
              {{detail.name}}
          </div>
          <div class="children">
              Children: {{ detail.children?.length || 0}}
          </div>

          <button (click)="toggleEdit()">
              {{editing ? "Save" : "Edit" }}
          </button>
          <button (click)="onRemove()">
              remove
          </button>
      </div>
  `
})
export class PassengerDetailComponent implements OnChanges{
  @Input()
  detail: Passenger;

  editing: boolean = false;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  constructor() {
  }

  ngOnChanges(change){
    this.detail = Object.assign({}, change.detail.currentValue)
  }



  onNameChange(value: string) {
    this.detail.name = value
  }

  toggleEdit() {
    if (this.editing){
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

}
