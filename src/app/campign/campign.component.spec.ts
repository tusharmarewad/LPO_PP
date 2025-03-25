import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampignComponent } from './campign.component';

describe('CampignComponent', () => {
  let component: CampignComponent;
  let fixture: ComponentFixture<CampignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampignComponent]
    });
    fixture = TestBed.createComponent(CampignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
