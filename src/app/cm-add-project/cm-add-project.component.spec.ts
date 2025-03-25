import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMAddProjectComponent } from './cm-add-project.component';

describe('CMAddProjectComponent', () => {
  let component: CMAddProjectComponent;
  let fixture: ComponentFixture<CMAddProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CMAddProjectComponent]
    });
    fixture = TestBed.createComponent(CMAddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
