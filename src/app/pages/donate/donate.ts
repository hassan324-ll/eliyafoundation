import { Component } from '@angular/core';
import { DonationSlider } from '../../components/donation-slider/slider';
import { DonateAccordion } from '../../components/donate-accordion/donate-accordion';

@Component({
  selector: 'app-donate',
  imports: [DonationSlider, DonateAccordion],
  templateUrl: './donate.html',
  styleUrl: './donate.css',
})
export class Donate {

}
