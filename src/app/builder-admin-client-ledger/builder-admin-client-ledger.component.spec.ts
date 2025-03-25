import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAdminClientLedgerComponent } from './builder-admin-client-ledger.component';

describe('BuilderAdminClientLedgerComponent', () => {
  let component: BuilderAdminClientLedgerComponent;
  let fixture: ComponentFixture<BuilderAdminClientLedgerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAdminClientLedgerComponent]
    });
    fixture = TestBed.createComponent(BuilderAdminClientLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
