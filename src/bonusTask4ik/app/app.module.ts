import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list.component';
import { TaskDetailComponent } from './components/task-detail.component';
import { TaskItemComponent } from './components/task-item.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent,
        TaskDetailComponent,
        TaskItemComponent
    ],
    imports: [BrowserModule, AppRoutingModule, RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule {}

