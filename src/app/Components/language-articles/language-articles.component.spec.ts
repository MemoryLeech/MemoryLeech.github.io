import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageArticlesComponent } from './language-articles.component';

describe('LanguageArticlesComponent', () => {
  let component: LanguageArticlesComponent;
  let fixture: ComponentFixture<LanguageArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
