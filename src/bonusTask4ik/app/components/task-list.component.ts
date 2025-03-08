import { Component } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
    tasks = [
        { title: 'Work Task', status: 'Pending' },
        { title: 'Personal Task', status: 'Completed' }
    ];
    updateTaskList() {
        this.tasks = [...this.tasks]; // Обновляем массив, чтобы Angular заметил изменения
    }
}
