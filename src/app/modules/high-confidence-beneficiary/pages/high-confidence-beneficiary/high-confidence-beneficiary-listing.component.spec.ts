import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighConfidenceBeneficiaryListingComponent } from './high-confidence-beneficiary-listing.component';

describe('HighConfidenceBeneficiaryListingComponent', () => {
  let component: HighConfidenceBeneficiaryListingComponent;
  let fixture: ComponentFixture<HighConfidenceBeneficiaryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighConfidenceBeneficiaryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighConfidenceBeneficiaryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
