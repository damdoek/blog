import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGridSectionComponent } from './post-grid-section.component';

describe('PostGridSectionComponent', () => {
  let component: PostGridSectionComponent;
  let fixture: ComponentFixture<PostGridSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostGridSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostGridSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
