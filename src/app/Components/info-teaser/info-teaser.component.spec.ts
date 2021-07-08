import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTeaserComponent } from './info-teaser.component';

describe('InfoTeaserComponent', () => {
  let component: InfoTeaserComponent;
  let fixture: ComponentFixture<InfoTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTeaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
