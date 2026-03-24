import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SliderCard {
  imageUrl: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-donation-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.html',
  styleUrls: ['./slider.css'],
})
export class DonationSlider implements AfterViewInit, OnInit {
  @ViewChild('sliderTrack', { static: true }) sliderTrack!: ElementRef<HTMLElement>;
  @ViewChild('sliderWrapper', { static: true }) sliderWrapper!: ElementRef<HTMLElement>;

  sliderCards: SliderCard[] = [
    {
      imageUrl: './sliderimg1.webp',
      title: 'Zakat Appeal',
      description: 'Fuel daily programs that teach mindfulness and community care across villages.',
    },
    {
      imageUrl: './sliderimg2.webp',
      title: 'Gaza Emergency Appeal',
      description: 'Fund safe journeys and shelter for families rebuilding after disasters.',
    },
    {
      imageUrl: './sliderimg3.webp',
      title: 'Orphan Sponsorship',
      description: 'Support mobile clinics carrying essential supplies to remote communities.',
    },
    {
      imageUrl: './sliderimg4.webp',
      title: 'Sudan Emergency Appeal',
      description: 'Help build local health posts staffed by trained community members.',
    },
    {
      imageUrl: './sliderimg5.webp',
      title: 'Making the most of your mercy',
      description: 'Invest in regenerative farming that keeps land productive for future generations.',
    },
    {
      imageUrl: './sliderimg6.webp',
      title: 'Olive Tree Planting',
      description: 'Invest in regenerative farming that keeps land productive for future generations.',
    },
        {
      imageUrl: './sliderimg7.webp',
      title: 'Ramadhan 2026',
      description: 'Invest in regenerative farming that keeps land productive for future generations.',
    },
        {
      imageUrl: './sliderimg8.webp',
      title: 'Shelter Projects',
      description: 'Invest in regenerative farming that keeps land productive for future generations.',
    },
  ];

  currentPage = 0;
  cardsPerPage = 3;
  paginationIndexes: number[] = [];

  get pageCount() {
    return Math.ceil(this.sliderCards.length / this.cardsPerPage);
  }

  ngOnInit() {
    this.updatePaginationIndexes();
  }

  ngAfterViewInit() {
    this.updateCardsPerPage();
    this.updateScrollPosition();
  }

  prev() {
    this.goToPage(this.currentPage - 1);
  }

  next() {
    this.goToPage(this.currentPage + 1);
  }

  goToPage(target: number) {
    const maxPage = this.pageCount - 1;
    const destination = Math.max(0, Math.min(maxPage, target));
    if (!this.sliderTrack || !this.sliderWrapper) {
      return;
    }

    this.currentPage = destination;
    const wrapWidth = this.sliderWrapper.nativeElement.clientWidth;
    this.sliderTrack.nativeElement.scrollTo({
      left: destination * wrapWidth,
      behavior: 'smooth',
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.updateCardsPerPage();
    this.updateScrollPosition();
  }

  private updateCardsPerPage() {
    const width = window.innerWidth;

    // On small devices, show one slide at a time.
    // On wider screens, show multiple slides per page.
    const newCardsPerPage = width <= 768 ? 1 : 3;
    if (newCardsPerPage !== this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.currentPage = Math.min(this.currentPage, this.pageCount - 1);
      this.updatePaginationIndexes();
    }
  }

  private updatePaginationIndexes() {
    this.paginationIndexes = Array.from({ length: this.pageCount }, (_, index) => index);
  }

  gradientBackground(imageUrl: string) {
    return `linear-gradient(180deg, rgba(7, 5, 20, 0.15), rgba(7, 5, 20, 0.75)), url('${imageUrl}')`;
  }

  private updateScrollPosition() {
    if (!this.sliderTrack || !this.sliderWrapper) return;
    const wrapWidth = this.sliderWrapper.nativeElement.clientWidth;
    this.sliderTrack.nativeElement.scrollTo({
      left: this.currentPage * wrapWidth,
      behavior: 'auto',
    });
  }

  protected donate() {
    window.location.href = "https://buy.stripe.com/test_28EdR80sK5uabBQ4Bpasg00";
  }
}
