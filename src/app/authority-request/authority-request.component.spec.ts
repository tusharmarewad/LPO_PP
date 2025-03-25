import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityRequestComponent } from './authority-request.component';

describe('AuthorityRequestComponent', () => {
  let component: AuthorityRequestComponent;
  let fixture: ComponentFixture<AuthorityRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorityRequestComponent]
    });
    fixture = TestBed.createComponent(AuthorityRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
