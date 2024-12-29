import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router:Router){}
  
  user={fname :'Akash',Lname:'Gadge'}
  
  navtoForm()
  {
    // this.router.navigate(['/form',10]);
    this.router.navigate(['form',10],{queryParams:this.user})
  }
}
