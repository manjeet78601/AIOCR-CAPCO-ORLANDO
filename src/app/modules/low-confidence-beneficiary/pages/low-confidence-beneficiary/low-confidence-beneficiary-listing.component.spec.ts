import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowConfidenceBeneficiaryListingComponent } from './low-confidence-beneficiary-listing.component';

describe('LowConfidenceBeneficiaryListingComponent', () => {
  let component: LowConfidenceBeneficiaryListingComponent;
  let fixture: ComponentFixture<LowConfidenceBeneficiaryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowConfidenceBeneficiaryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowConfidenceBeneficiaryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
