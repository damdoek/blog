import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListSectionComponent } from './post-list-section.component';

describe('PostListSectionComponent', () => {
  let component: PostListSectionComponent;
  let fixture: ComponentFixture<PostListSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
