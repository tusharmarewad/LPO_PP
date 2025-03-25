import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmTeamPerSalesTargetComponent } from './sm-team-per-sales-target.component';

describe('SmTeamPerSalesTargetComponent', () => {
  let component: SmTeamPerSalesTargetComponent;
  let fixture: ComponentFixture<SmTeamPerSalesTargetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmTeamPerSalesTargetComponent]
    });
    fixture = TestBed.createComponent(SmTeamPerSalesTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
