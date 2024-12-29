import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DynamicService } from 'src/app/Services/dynamic.service';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-user-data',
  standalone:true,
  imports: [CommonModule ],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
  data :any []=[];
  dynamicdata:any
  serverdata:any
  
  constructor( private user1: UserServiceService, private Dydata: DynamicService) { }

  // From user-service.service.ts Which is Static Data
  userData()
  {
   this.data=this.user1.getUserData();
  }

  // From Third Party API
  getdynamicData()
  {
     
    this.Dydata.getdata().subscribe((res)=>{
      this.dynamicdata=res
      console.log(this.dynamicdata)
    })
  }

// From db.json Server
  getServerData(){
    this.user1.getServerData().subscribe((userdata)=>{

      this.serverdata=userdata;

    })
  }

}
