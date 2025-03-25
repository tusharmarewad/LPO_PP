import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMDraftAdHocComponent } from './cm-draft-ad-hoc.component';

describe('CMDraftAdHocComponent', () => {
  let component: CMDraftAdHocComponent;
  let fixture: ComponentFixture<CMDraftAdHocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CMDraftAdHocComponent]
    });
    fixture = TestBed.createComponent(CMDraftAdHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
