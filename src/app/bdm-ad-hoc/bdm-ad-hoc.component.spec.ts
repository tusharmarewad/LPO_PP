import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmAdHocComponent } from './bdm-ad-hoc.component';

describe('BdmAdHocComponent', () => {
  let component: BdmAdHocComponent;
  let fixture: ComponentFixture<BdmAdHocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BdmAdHocComponent]
    });
    fixture = TestBed.createComponent(BdmAdHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
