import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone:true,
  imports: [ FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  // Using FormGroup and FormControl from @angular/forms

  // myForm = new FormGroup({
  //   fname : new FormControl('',[Validators.required,Validators.minLength(3)]),
  //   email : new FormControl('',[Validators.required, Validators.email]),
  //   mobNo: new FormControl('',[Validators.pattern('[0-9]{10}'),Validators.required]),
  // })



  // Using FormBuilder from @angular/forms

  myForm: FormGroup;

  constructor(private fb: FormBuilder){
   this.myForm=this.fb.group({
    fname: ['',[Validators.required,Validators.minLength(3)]],
    email :['',[Validators.required,Validators.email]],
    mobNo: ['',[Validators.pattern('[0-9]{10}'),Validators.required]]
   })    
  }

  isSubmitted=false;

  onSubmit() {
    if(this.myForm.valid){
      console.log(this.myForm.value);
      this.isSubmitted=true;

      setTimeout(() => {
        this.isSubmitted=false;
      }, 2000);
    }
    
    else{
      console.log(this.myForm,'Errors From Form')
    }
  }
}
