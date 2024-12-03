import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
// Value coming from parent
  @Input() username:string='';
  @Input() arr:number[]=[]

// value sending to parent

@Output() sendvaluetoParent = new EventEmitter<string>();

sendDatatoParent()
{
  console.log("hii")
  this.sendvaluetoParent.emit(this.username);
}
  

}
