import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DataService } from '../services/data.service';
import { contact } from '../../data-types';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private data: DataService) {}

  email = new FormControl('', [Validators.required, Validators.email]);

  name = new FormControl('', [Validators.required]);

  message = new FormControl('', [
    Validators.required,
    Validators.minLength(15),
  ]);

  ContactForm = new FormGroup({
    email: this.email,
    name: this.name,
    message: this.message,
  });
  async send() {
    const success = await this.data.createMessage(this.ContactForm.value as contact);
    if (success) {
      alert('Your message has been sent successfully!!');
      this.ContactForm.reset();
    } else {
      alert('There was an error sending your message. Please try again.');
    }
  }
}
