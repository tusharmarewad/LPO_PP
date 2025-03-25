import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmAddProjectComponent } from './bdm-add-project.component';

describe('BdmAddProjectComponent', () => {
  let component: BdmAddProjectComponent;
  let fixture: ComponentFixture<BdmAddProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BdmAddProjectComponent]
    });
    fixture = TestBed.createComponent(BdmAddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
