import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  navbarOpen!: false;

  onSubmit() {
    // Handle form submission here, e.g., send the data to a server
    console.log('Form submitted:', this.contact);
    // You can implement an HTTP request to send the data to your backend.
  }
}
