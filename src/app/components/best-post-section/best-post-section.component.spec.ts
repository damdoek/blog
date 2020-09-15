import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPostSectionComponent } from './best-post-section.component';

describe('BestPostSectionComponent', () => {
  let component: BestPostSectionComponent;
  let fixture: ComponentFixture<BestPostSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestPostSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPostSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
