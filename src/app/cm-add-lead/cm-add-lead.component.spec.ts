import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMAddLeadComponent } from './cm-add-lead.component';

describe('CMAddLeadComponent', () => {
  let component: CMAddLeadComponent;
  let fixture: ComponentFixture<CMAddLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CMAddLeadComponent]
    });
    fixture = TestBed.createComponent(CMAddLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
