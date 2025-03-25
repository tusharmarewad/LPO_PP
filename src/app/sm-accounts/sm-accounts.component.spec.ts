import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmAccountsComponent } from './sm-accounts.component';

describe('SmAccountsComponent', () => {
  let component: SmAccountsComponent;
  let fixture: ComponentFixture<SmAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmAccountsComponent]
    });
    fixture = TestBed.createComponent(SmAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
