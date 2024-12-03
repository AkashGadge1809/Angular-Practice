import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColordirectiveDirective } from 'src/app/directives/colordirective.directive';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl:'./structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {

  firstName='Akash'
  showvalue=true
  player:string[]=['Sachin','Dhoni','Virat','Rohit']
  playerName='Dhoni'

  myclass={
    heading:this.showvalue,// What if we dont provide any value to heading
    color:!this.showvalue
  }
  changecolor={
    color2:this.showvalue
  }
  onchange()
  {
    this.showvalue=!this.showvalue
  }

  myActivestyle={
    color:'yellow',
    background:'red'
  }

  myDisablestyle={
    color:'black',
    background:'yellow'
  }
  

}
