import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterExtractorComponent } from './twitter-extractor.component';

describe('TwitterExtractorComponent', () => {
  let component: TwitterExtractorComponent;
  let fixture: ComponentFixture<TwitterExtractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterExtractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterExtractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
