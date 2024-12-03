import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  firstName='Akash'
  arr:number[]=[1,2,3]
  inputvalue=''
  value=''
  Username:string=''

  sendvalutToChild()
  {
    this.value=this.inputvalue
  }

  datafromChild(text:string)
  {
    this.Username=text
  }
}
