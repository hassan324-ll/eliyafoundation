import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  emailInput: string = '';
  subscribeMessage: string = '';
  subscribeSuccess: boolean = false;
  donateHovered: boolean = false;
  activeSocial: string | null = null;

  onSubscribe(): void {
    if (!this.emailInput.trim()) {
      this.subscribeMessage = 'Please enter a valid email address.';
      this.subscribeSuccess = false;
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.emailInput)) {
      this.subscribeMessage = 'Please enter a valid email address.';
      this.subscribeSuccess = false;
      return;
    }

    // Simulate successful subscription
    this.subscribeMessage = 'Thank you for subscribing! Check your email.';
    this.subscribeSuccess = true;
    this.emailInput = '';

    // Clear message after 5 seconds
    setTimeout(() => {
      this.subscribeMessage = '';
    }, 5000);
  }
}

