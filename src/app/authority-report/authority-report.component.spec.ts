import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityReportComponent } from './authority-report.component';

describe('AuthorityReportComponent', () => {
  let component: AuthorityReportComponent;
  let fixture: ComponentFixture<AuthorityReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorityReportComponent]
    });
    fixture = TestBed.createComponent(AuthorityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
