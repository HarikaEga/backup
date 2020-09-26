import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title = 'Angular Form Validation';
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
   this.createForm();
 }
  createForm() {
   this.angForm = this.fb.group({
      name: ['', Validators.minLength(5)],
      email: ['', Validators.required],
      mobile:['',Validators.required],
      designation:['',Validators.nullValidator],
      location:['',Validators.nullValidator],
      course:['',Validators.required],
      remarks:['', Validators.nullValidator]
   
   
   
   
    });
 }
  

  ngOnInit(): void {
  }

}
