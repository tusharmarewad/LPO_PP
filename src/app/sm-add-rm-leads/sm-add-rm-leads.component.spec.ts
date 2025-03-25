import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmAddRmLeadsComponent } from './sm-add-rm-leads.component';

describe('SmAddRmLeadsComponent', () => {
  let component: SmAddRmLeadsComponent;
  let fixture: ComponentFixture<SmAddRmLeadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmAddRmLeadsComponent]
    });
    fixture = TestBed.createComponent(SmAddRmLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
