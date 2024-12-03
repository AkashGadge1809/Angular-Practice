import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectivesComponent } from "../structural-directives/structural-directives.component";
import { SquarePipe } from 'src/app/pipe/square.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, StructuralDirectivesComponent,SquarePipe],
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
firstName='Akash'
date="12/10/2024"
}
