import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMarksComponent } from './list-marks.component';

describe('ListMarksComponent', () => {
  let component: ListMarksComponent;
  let fixture: ComponentFixture<ListMarksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMarksComponent]
    });
    fixture = TestBed.createComponent(ListMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
