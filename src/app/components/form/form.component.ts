import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private route:ActivatedRoute) { }

  showValue()
  {
    this.route.params.subscribe((p)=>{
      console.log(p['id'])
    })
    this.route.queryParamMap.subscribe((p)=>{
      console.log(p.get('fname'),'First Name')
      console.log(p.get('Lname'),'Last Name')
    })
  }
}
