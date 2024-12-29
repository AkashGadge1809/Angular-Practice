import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { PipesComponent } from "../pipes/pipes.component";

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [PipesComponent],
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css' ]
})
export class ViewChildComponent {

  @ViewChild('div') div1!: ElementRef;
  @ViewChild('pipecomp') pipe! : PipesComponent;



  changeText() { 
    this.div1.nativeElement.innerText = 'Hello Angular';
    this.div1.nativeElement.style.color = 'red';
  }

  callpipeFunc()
  {
    this.pipe.greetingFunction(); 

  }
}