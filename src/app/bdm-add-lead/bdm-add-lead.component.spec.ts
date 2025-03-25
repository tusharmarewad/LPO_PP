import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmAddLeadComponent } from './bdm-add-lead.component';

describe('BdmAddLeadComponent', () => {
  let component: BdmAddLeadComponent;
  let fixture: ComponentFixture<BdmAddLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BdmAddLeadComponent]
    });
    fixture = TestBed.createComponent(BdmAddLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
