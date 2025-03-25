import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAccountantBankNocComponent } from './builder-accountant-bank-noc.component';

describe('BuilderAccountantBankNocComponent', () => {
  let component: BuilderAccountantBankNocComponent;
  let fixture: ComponentFixture<BuilderAccountantBankNocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAccountantBankNocComponent]
    });
    fixture = TestBed.createComponent(BuilderAccountantBankNocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
