import { Component, OnInit } from '@angular/core';
import { ToDo } from "../../ToDo"

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todos : ToDo[] = [];
  constructor() {
    if( localStorage.getItem("todos") === null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(localStorage.getItem("todos") || '{}');
    }
  }

  ngOnInit(): void {
  }

  deleteToDo(todo: ToDo) {
    let index : number;
    console.log("ToDo => "+todo.title);
    index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addToDo(toDo : ToDo) {
    this.todos.push(toDo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  checkToDo(todo : ToDo) {
    this.todos.map(toDo => {
      if(todo.sno === toDo.sno) {
        todo.active = !todo.active;
      }
    })
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
}
