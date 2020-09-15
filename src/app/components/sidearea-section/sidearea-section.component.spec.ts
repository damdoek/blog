import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideareaSectionComponent } from './sidearea-section.component';

describe('SideareaSectionComponent', () => {
  let component: SideareaSectionComponent;
  let fixture: ComponentFixture<SideareaSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideareaSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideareaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
