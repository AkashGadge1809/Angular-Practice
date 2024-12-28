import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  form={
    name:'',
    email:'',
    password:''
 
 }
 isSubmitted=false;

 onSubmit(data:any){

  console.log(data);
  this.isSubmitted=true;


  setTimeout(() => {
   this.isSubmitted=false;
  }, 2000);


 }
}
