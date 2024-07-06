import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  submitted: boolean = false;
  contactForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    message: new FormControl("", [Validators.required])
  });

  ngOnInit(): void {
    this.contactForm.controls['name'].valueChanges.subscribe(res=>{
      
      console.log("Name value changed: ", res);
    })
    this.contactForm.controls['email'].valueChanges.subscribe(res=>{
      console.log("Email value changed: ", res);
    })
    this.contactForm.controls['message'].valueChanges.subscribe(res=>{
      console.log("Message value changed: ", res);
    })
  }

  onSave() {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log("Form Submitted!", this.contactForm.value);
    } else {
      console.log("Form is invalid!");
    }
  }
 
}
