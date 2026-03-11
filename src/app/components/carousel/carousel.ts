import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// slide data shape
export type CarouselFeature = {
  id: string;
  bgImage: string;
};

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css'],
})
export class Carousel {
  activeIndex = 0;
  trackIndex = 0;
  transitionEnabled = true;
  progressValues: number[] = [];
  progressTimer: ReturnType<typeof setInterval> | null = null;

  features: CarouselFeature[] = [
    {
      id: '1',
      bgImage: './carouselimg1.avif',
    },
    {
      id: '2',
      bgImage: './carouselimg2.avif',
    },
    {
      id: '3',
      bgImage: '/./carouselimg3.avif',
    },
  ];
  displaySlides: CarouselFeature[] = [];

  getSlideBackground(imagePath: string): string {
    return `linear-gradient(rgba(7, 12, 18, 0.62), rgba(7, 12, 18, 0.62)), url('${imagePath}')`;
  }

  ngOnInit(): void {
    this.displaySlides = [...this.features, this.features[0]];
    this.progressValues = this.features.map(() => 0);
    this.startProgress();
  }

  ngOnDestroy(): void {
    this.clearProgressTimer();
  }

  nextSlide(): void {
    this.trackIndex += 1;
    this.activeIndex = (this.activeIndex + 1) % this.features.length;
    this.progressValues = this.features.map(() => 0);
    this.startProgress();
  }

  onTrackTransitionEnd(): void {
    if (this.trackIndex === this.features.length) {
      this.transitionEnabled = false;
      this.trackIndex = 0;
      this.activeIndex = 0;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.transitionEnabled = true;
        });
      });
    }
  }

  getTrackTransform(): string {
    return `translateX(-${this.trackIndex * 100}%)`;
  }

  private startProgress(): void {
    this.clearProgressTimer();

    const duration = 3500;
    const interval = 30;
    const step = 100 / (duration / interval);

    this.progressTimer = setInterval(() => {
      if (this.progressValues[this.activeIndex] < 100) {
        this.progressValues[this.activeIndex] += step;
      }

      if (this.progressValues[this.activeIndex] >= 100) {
        this.progressValues[this.activeIndex] = 100;
        this.nextSlide();
      }
    }, interval);
  }

  private clearProgressTimer(): void {
    if (this.progressTimer) {
      clearInterval(this.progressTimer);
      this.progressTimer = null;
    }
  }
}
