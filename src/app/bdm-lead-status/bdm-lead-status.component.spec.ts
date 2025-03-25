import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmLeadStatusComponent } from './bdm-lead-status.component';

describe('BdmLeadStatusComponent', () => {
  let component: BdmLeadStatusComponent;
  let fixture: ComponentFixture<BdmLeadStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BdmLeadStatusComponent]
    });
    fixture = TestBed.createComponent(BdmLeadStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
