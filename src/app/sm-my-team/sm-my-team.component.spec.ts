import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmMyTeamComponent } from './sm-my-team.component';

describe('SmMyTeamComponent', () => {
  let component: SmMyTeamComponent;
  let fixture: ComponentFixture<SmMyTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmMyTeamComponent]
    });
    fixture = TestBed.createComponent(SmMyTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
