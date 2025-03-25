import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmCreateScheduleComponent } from './bdm-create-schedule.component';

describe('BdmCreateScheduleComponent', () => {
  let component: BdmCreateScheduleComponent;
  let fixture: ComponentFixture<BdmCreateScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BdmCreateScheduleComponent]
    });
    fixture = TestBed.createComponent(BdmCreateScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
