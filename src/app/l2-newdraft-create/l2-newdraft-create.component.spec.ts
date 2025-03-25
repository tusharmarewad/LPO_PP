import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2NewdraftCreateComponent } from './l2-newdraft-create.component';

describe('L2NewdraftCreateComponent', () => {
  let component: L2NewdraftCreateComponent;
  let fixture: ComponentFixture<L2NewdraftCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L2NewdraftCreateComponent]
    });
    fixture = TestBed.createComponent(L2NewdraftCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
