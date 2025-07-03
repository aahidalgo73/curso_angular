import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl:'./app.html',
  styleUrl:'./app.scss',
  standalone:true,
})

export class App{
  title="PRODUCTOS";
  task="";
  tasks:{id: number, name:string}[]=[];
  
  addTask(){
    if(this.task.trim()==="") return;
    this.tasks.push({id: this.tasks.length +1, name: this.task});
    this.task="";
  }

  removeTask(id: number){
    this.tasks=this.tasks.filter(task => task.id !==id);
  }
  
}
