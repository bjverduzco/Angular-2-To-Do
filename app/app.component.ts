import {Component} from '@angular/core';

//prob do this in a seperate component
export class Task {
  desc: string;
  done: boolean;
}

const TASKS: Task[] = [
  {desc: 'bleh meh huh', done: true},
  {desc: 'Get overwhelmed with fear', done: false},
  {desc: 'Tears', done: false},
  {desc: 'Tears', done: false},
  {desc: 'Tears', done: false},
  {desc: 'Tears', done: true},
  {desc: 'Get it together', done: false},
  {desc: 'All better!', done: false}
];

@Component({
  selector: 'to-do',
  template: `
  <h1>{{title}}</h1>

  <input type="text" [(ngModel)]="newTaskDesc"/>
  <button (click)="addTask(newTaskDesc)">Add</button>
  <ul>
    <li *ngFor="let task of tasks">
    <!--things go here-->
    <!--{{task.desc}} | {{task.done}}-->
    {{task.desc}} <input type="checkbox" [(ngModel)]="task.done"/>
    </li>
  </ul>


  `
})

export class AppComponent {
  title = 'Task Lister 5000';
  tasks = TASKS;
  addTask = function(newTaskDesc){
    this.tasks.push({desc: newTaskDesc, done: false});
  };
}
