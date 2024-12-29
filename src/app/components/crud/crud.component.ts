import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { DynamicService } from 'src/app/Services/dynamic.service';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-crud',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CRUDComponent {

  UserData:any[]=[]
  curruser: { id?:string; name:string; age:string } = {
      
      name:'',
      age :'',
  };

constructor( private user : CrudService){}

ngOnInit()
{
  this.fetchData()
}

//Get Method
fetchData()
{
  this.user.getUserData().subscribe((res)=>{
    this.UserData=res;

  })
}

//Post Method
SavaUser()
{
  if(this.curruser?.id)
    {
      this.user.UpdateUser(this.curruser,this.curruser?.id).subscribe(()=>{ 
        console.log('User Updated')
        this.fetchData()
        this.resetform()
      })
    }
    else{
  this.user.Savedata(this.curruser).subscribe(()=>{
    console.log('User Saved')
    this.fetchData()
   this.resetform()

  })}
}


//Delete Method
DeleteUser(id:string)
{
  this.user.DeleteData(id).subscribe(()=>{
    console.log('User Deleted')  
    this.fetchData()
  })
}

//Update Method
updateUser(data:any)
{
  this.curruser=data;
  
}

resetform()
{
  this.curruser={
    name:'',
    age:'',
  }
}

}
