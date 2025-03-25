import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BDMDashboardComponent } from './bdm-dashboard.component';

describe('BDMDashboardComponent', () => {
  let component: BDMDashboardComponent;
  let fixture: ComponentFixture<BDMDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BDMDashboardComponent]
    });
    fixture = TestBed.createComponent(BDMDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
