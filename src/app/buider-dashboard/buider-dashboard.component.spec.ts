import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiderDashboardComponent } from './buider-dashboard.component';

describe('BuiderDashboardComponent', () => {
  let component: BuiderDashboardComponent;
  let fixture: ComponentFixture<BuiderDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuiderDashboardComponent]
    });
    fixture = TestBed.createComponent(BuiderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
