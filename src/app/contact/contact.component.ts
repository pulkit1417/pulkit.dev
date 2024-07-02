import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  email = new FormControl("",[
    Validators.required,
    Validators.email,
  ])

  name = new FormControl("",[
    Validators.required,
  ])

  message = new FormControl("",[
    Validators.required,
    Validators.minLength(15)
  ])

  ContactForm = new FormGroup({
    email:this.email,
    name:this.name,
    message:this.message,
  })
  reset(){
    this.ContactForm.reset();
  }
  send(){
    console.log(this.ContactForm.value);
    alert("Your message has been sent succesfully!!");
    this.reset();
  }
}
