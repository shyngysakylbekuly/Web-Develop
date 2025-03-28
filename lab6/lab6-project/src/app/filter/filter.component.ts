import {Component,Output,EventEmitter} from '@angular/core';
@Component({
  selector:'app-filter',
  imports:[],
  templateUrl:'./filter.component.html',
  styleUrl:'./filter.component.css'
})
export class FilterComponent{
  @Output() filterEvent: EventEmitter<void>=new EventEmitter<void>;
  @Output() filterCheck: EventEmitter<void>=new EventEmitter<void>;

  successFilter(): void{
    this.filterEvent.emit()
  }
  failedFilter(): void{
    this.filterCheck.emit()
  }
}
