import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksChildComponent } from './hooks-child.component';

describe('HooksChildComponent', () => {
  let component: HooksChildComponent;
  let fixture: ComponentFixture<HooksChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HooksChildComponent]
    });
    fixture = TestBed.createComponent(HooksChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
