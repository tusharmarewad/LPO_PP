import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lawyer2RequestforCertifiedComponent } from './lawyer2-requestfor-certified.component';

describe('Lawyer2RequestforCertifiedComponent', () => {
  let component: Lawyer2RequestforCertifiedComponent;
  let fixture: ComponentFixture<Lawyer2RequestforCertifiedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lawyer2RequestforCertifiedComponent]
    });
    fixture = TestBed.createComponent(Lawyer2RequestforCertifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
