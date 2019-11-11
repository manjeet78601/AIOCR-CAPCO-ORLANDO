import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowConfidenceBeneficiaryDisplayComponent } from './low-confidence-beneficiary-display.component';

describe('LowConfidenceBeneficiaryDisplayComponent', () => {
  let component: LowConfidenceBeneficiaryDisplayComponent;
  let fixture: ComponentFixture<LowConfidenceBeneficiaryDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowConfidenceBeneficiaryDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowConfidenceBeneficiaryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
