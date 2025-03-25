import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAdminUpdateClientComponent } from './builder-admin-update-client.component';

describe('BuilderAdminUpdateClientComponent', () => {
  let component: BuilderAdminUpdateClientComponent;
  let fixture: ComponentFixture<BuilderAdminUpdateClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAdminUpdateClientComponent]
    });
    fixture = TestBed.createComponent(BuilderAdminUpdateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
