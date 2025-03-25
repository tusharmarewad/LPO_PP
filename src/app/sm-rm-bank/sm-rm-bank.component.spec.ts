import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmRmBankComponent } from './sm-rm-bank.component';

describe('SmRmBankComponent', () => {
  let component: SmRmBankComponent;
  let fixture: ComponentFixture<SmRmBankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmRmBankComponent]
    });
    fixture = TestBed.createComponent(SmRmBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
