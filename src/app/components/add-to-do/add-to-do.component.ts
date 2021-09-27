import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/ToDo';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  @Output() addTodo : EventEmitter<ToDo> = new EventEmitter();

  count : number = 1;

  title!: string;
  desc!: string;
  formData!: FormGroup;

  constructor() {
    this.formData = new FormGroup({
      title : new FormControl(""),
      desc : new FormControl("")
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("data -> "+this.formData.value.title);
    const todo = {
      sno: this.count++,
      title: this.formData.value.title,
      desc: this.formData.value.desc,
      active: true
    }
    this.addTodo.emit(todo);
  }

  

}
