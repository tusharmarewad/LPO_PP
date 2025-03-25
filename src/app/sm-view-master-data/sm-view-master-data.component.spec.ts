import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmViewMasterDataComponent } from './sm-view-master-data.component';

describe('SmViewMasterDataComponent', () => {
  let component: SmViewMasterDataComponent;
  let fixture: ComponentFixture<SmViewMasterDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmViewMasterDataComponent]
    });
    fixture = TestBed.createComponent(SmViewMasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
