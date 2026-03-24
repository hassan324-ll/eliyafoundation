import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact-us',
  imports: [CommonModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  isLoading = false;
  showSuccessMessage = false;

  sendEmail(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    this.isLoading = true;
    this.showSuccessMessage = false;

    emailjs.sendForm(
      'service_lt6cxjm',
      'template_9s42e1r',
      form,
      'rsvi4MXHaw-jXGeCw'
    ).then(
      () => {
        this.isLoading = false;
        this.showSuccessMessage = true;
        form.reset();
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        alert('Failed to send message');
      }
    );
  }
}
