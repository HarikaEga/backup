import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public user: User; // our model
  ngOnInit() {       // we will initialize our form here
   this.user = {
   name: '',
   email:'',
   mobile:'',
   designation:'',
   location:'',
   remarks:'',
 
  };
  }
  save(model: User, isValid: boolean) 
  {
  // check if model is valid// if valid, call API to save customer
  console.log(model, isValid);
  }
  constructor() { }

  

}
