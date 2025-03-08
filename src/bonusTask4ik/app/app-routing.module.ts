import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list.component';
import { TaskDetailComponent } from './components/task-detail.component';

const routes: Routes = [
    { path: '', component: TaskListComponent },
    { path: 'task/:id', component: TaskDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
