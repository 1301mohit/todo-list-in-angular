import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input()  todo!: ToDo; 
  @Output() todoDelete:EventEmitter<ToDo> = new EventEmitter();
  @Output() checkTodo : EventEmitter<ToDo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: ToDo) {
    console.log("Todo -> "+todo);
    this.todoDelete.emit(todo);
    console.log("Delete"); 
  }

  onCheckBoxClick(todo: ToDo) {
    this.checkTodo.emit(todo);
  }

}
