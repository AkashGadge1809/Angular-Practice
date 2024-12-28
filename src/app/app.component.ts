import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StructuralDirectivesComponent } from "./components/structural-directives/structural-directives.component";
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
    selector: 'app-root',
    standalone:true,
    imports: [CommonModule, RouterOutlet, RouterModule,NavbarComponent ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';
}
