import {Component, Input, Output, EventEmitter} from "@angular/core";
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
                      (blur)="disableEdit()"
                      (keydown.enter)="disableEdit()"
                      #name
              >
          </div>
          <div *ngIf="!editing">
              {{detail.name}}
          </div>
          <div class="children">
              Children: {{ detail.children?.length || 0}}
          </div>

          <button (click)="enableEdit()">
              {{editing ? "Save" : "Edit" }}
          </button>
          <button (click)="onRemove()">
              remove
          </button>
      </div>
  `
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger;

  editing: boolean = false;

  @Output
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  constructor() {
  }

  onNameChange(value: string) {
    this.detail.name = value;
  }

  enableEdit() {
    this.editing = !this.editing;
  }

  disableEdit() {
    this.editing = false;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
