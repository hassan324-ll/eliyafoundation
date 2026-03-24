import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AccordionDetail {
  label: string;
  value: string;
}

interface AccordionSection {
  id: string;
  title: string;
  icon: string;
  description?: string;
  details?: AccordionDetail[];
}

@Component({
  selector: 'app-donate-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donate-accordion.html',
  styleUrls: ['./donate-accordion.css'],
})
export class DonateAccordion {
  sections: AccordionSection[] = [
    {
      id: 'bank',
      title: 'Donate by Bank Transfer',
      icon: 'fas fa-university',
      details: [
        { label: 'Bank', value: '' },
        { label: 'Account name', value: '' },
        { label: 'Account number', value: '' },
        { label: 'Sort code', value: '' },
        { label: 'SWIFT/BIC code*', value: '' },
        { label: 'IBAN*', value: '' },
      ],
    },
    {
      id: 'cheque',
      title: 'Donate by Cheque',
      icon: 'fas fa-pen-fancy',
      description:
        'Send your cheque to our central office. Please make it payable to "Human Appeal" and include your contact details so we can send a receipt.',
    },
    {
      id: 'telephone',
      title: 'Donate by Telephone',
      icon: 'fas fa-phone-alt',
      description:
        'Call our friendly donations team to give securely using your card. We are available Monday to Friday, 9am to 6pm.',
    },
  ];

  // Start with no section expanded by default
  activeSection = '';

  toggleSection(sectionId: string) {
    this.activeSection = this.activeSection === sectionId ? '' : sectionId;
  }

  isSectionOpen(sectionId: string) {
    return this.activeSection === sectionId;
  }
}
