import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderAccountantUpdateClientComponent } from './builder-accountant-update-client.component';

describe('BuilderAccountantUpdateClientComponent', () => {
  let component: BuilderAccountantUpdateClientComponent;
  let fixture: ComponentFixture<BuilderAccountantUpdateClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderAccountantUpdateClientComponent]
    });
    fixture = TestBed.createComponent(BuilderAccountantUpdateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
