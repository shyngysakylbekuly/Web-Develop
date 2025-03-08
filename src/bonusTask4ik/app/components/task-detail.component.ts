import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
    taskId: string | null = '';

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.taskId = this.route.snapshot.paramMap.get('id');
    }
}
