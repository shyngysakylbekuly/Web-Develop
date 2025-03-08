import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
    @Input() task: { title: string; status: string } | undefined;
    @Output() taskCompleted = new EventEmitter<void>();

    markAsCompleted() {
        if (this.task) {
            this.task.status = 'Completed';
            this.taskCompleted.emit();
        }
    }
}
