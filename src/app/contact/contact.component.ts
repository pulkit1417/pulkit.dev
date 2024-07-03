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

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);

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
      this.ContactForm.reset();
    } else {
      alert('There was an error sending your message. Please try again.');
    }
  }

  private section: HTMLElement | null = null;
  private overlay: HTMLElement | null = null;
  private showBtn: HTMLElement | null = null;
  private closeBtn: HTMLElement | null = null;

  ngOnInit() {
    this.section = document.querySelector("section");
    this.overlay = document.querySelector(".overlay");
    this.showBtn = document.querySelector(".send");
    this.closeBtn = document.querySelector(".close-btn");

    this.setupEventListeners();
  }

  private setupEventListeners() {
    if (this.section && this.overlay && this.showBtn && this.closeBtn) {
      this.showBtn.addEventListener("click", () => this.section!.classList.add("active"));

      this.overlay.addEventListener("click", () => 
        this.section!.classList.remove("active")
      );

      this.closeBtn.addEventListener("click", () => 
        this.section!.classList.remove("active")
      );
    }
  }
}
