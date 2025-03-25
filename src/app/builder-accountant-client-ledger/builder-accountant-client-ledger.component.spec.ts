import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAccountantClientLedgerComponent } from './builder-accountant-client-ledger.component';

describe('BuilderAccountantClientLedgerComponent', () => {
  let component: BuilderAccountantClientLedgerComponent;
  let fixture: ComponentFixture<BuilderAccountantClientLedgerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAccountantClientLedgerComponent]
    });
    fixture = TestBed.createComponent(BuilderAccountantClientLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
