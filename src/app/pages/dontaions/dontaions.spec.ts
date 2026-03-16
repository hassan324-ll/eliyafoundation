import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dontaions } from './dontaions';

describe('Dontaions', () => {
  let component: Dontaions;
  let fixture: ComponentFixture<Dontaions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dontaions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dontaions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
