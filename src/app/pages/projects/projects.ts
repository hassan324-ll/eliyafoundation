import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectCard {
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly maxVisible = 8;
  protected showAll = false;

  protected readonly cards: ProjectCard[] = [
    {
      title: 'Ramadhan 2026',
      description:
        'Our Ramadhan Appeals Booklet 2026 campaign is helping to fight hunger and support families in need.',
      image: '/sliderimg1.webp',
      alt: 'Ramadhan 2026',
      link: '/donate',
    },
    {
      title: 'Education Centre',
      description:
        'Support our unique opportunity to build a transformative Darul Uloom school that empowers students.',
      image: '/sliderimg2.webp',
      alt: 'Education Centre',
      link: '/donate',
    },
    {
      title: 'General Projects',
      description:
        'Your donation towards our General Projects helps save and change lives through sustainable support.',
      image: '/sliderimg3.webp',
      alt: 'General Projects',
      link: '/donate',
    },
    {
      title: 'Emergency Projects',
      description:
        'Our Emergency Projects are a beacon of hope and action during times of crisis and urgent need.',
      image: '/sliderimg4.webp',
      alt: 'Emergency Projects',
      link: '/donate',
    },
    // You can add more cards here (they will appear when "Show More" is clicked)
    {
      title: 'Health & Nutrition',
      description:
        'Support campaigns that bring life-saving food and medical supplies to families in need.',
      image: '/sliderimg5.webp',
      alt: 'Health & Nutrition',
      link: '/donate',
    },
    {
      title: 'Water & Sanitation',
      description:
        'Clean water and sanitation are basic human rights — help us make them available for all.',
      image: '/sliderimg6.webp',
      alt: 'Water & Sanitation',
      link: '/donate',
    },
    {
      title: 'Community Support',
      description:
        'Join our community support initiatives that provide education, counselling, and local aid.',
      image: '/homesec1img.jpg',
      alt: 'Community Support',
      link: '/donate',
    },
    {
      title: 'Emergency Relief',
      description:
        'Rapid response efforts that deliver emergency aid directly where it is needed most.',
      image: '/homesec2img.jpg',
      alt: 'Emergency Relief',
      link: '/donate',
    },
     {
      title: 'Emergency Relief',
      description:
        'Rapid response efforts that deliver emergency aid directly where it is needed most.',
      image: '/homesec2img.jpg',
      alt: 'Emergency Relief',
      link: '/donate',
    },  
     {
      title: 'Emergency Relief',
      description:
        'Rapid response efforts that deliver emergency aid directly where it is needed most.',
      image: '/homesec2img.jpg',
      alt: 'Emergency Relief',
      link: '/donate',
    },
     {
      title: 'Emergency Relief',
      description:
        'Rapid response efforts that deliver emergency aid directly where it is needed most.',
      image: '/homesec2img.jpg',
      alt: 'Emergency Relief',
      link: '/donate',
    },
  ];

  protected get visibleCards(): ProjectCard[] {
    return this.showAll ? this.cards : this.cards.slice(0, this.maxVisible);
  }

  protected toggleShowMore() {
    this.showAll = !this.showAll;
  }

  protected donate() {
    window.location.href = "https://buy.stripe.com/test_28EdR80sK5uabBQ4Bpasg00";
  }
}
