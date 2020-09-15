import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtNotifComponent } from './ext-notif.component';

describe('ExtNotifComponent', () => {
  let component: ExtNotifComponent;
  let fixture: ComponentFixture<ExtNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
