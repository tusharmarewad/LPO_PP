import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lawyer2RequestforBindingComponent } from './lawyer2-requestfor-binding.component';

describe('Lawyer2RequestforBindingComponent', () => {
  let component: Lawyer2RequestforBindingComponent;
  let fixture: ComponentFixture<Lawyer2RequestforBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lawyer2RequestforBindingComponent]
    });
    fixture = TestBed.createComponent(Lawyer2RequestforBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
