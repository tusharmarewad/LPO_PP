import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMDashboardComponent } from './cm-dashboard.component';

describe('CMDashboardComponent', () => {
  let component: CMDashboardComponent;
  let fixture: ComponentFixture<CMDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CMDashboardComponent]
    });
    fixture = TestBed.createComponent(CMDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
