import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostContentEletComponent } from './post-content-elet.component';

describe('PostContentEletComponent', () => {
  let component: PostContentEletComponent;
  let fixture: ComponentFixture<PostContentEletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostContentEletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostContentEletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
