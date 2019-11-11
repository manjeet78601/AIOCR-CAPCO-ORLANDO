import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowConfidenceBeneficiaryComponent } from './low-confidence-beneficiary.component';

describe('LowConfidenceBeneficiaryComponent', () => {
  let component: LowConfidenceBeneficiaryComponent;
  let fixture: ComponentFixture<LowConfidenceBeneficiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowConfidenceBeneficiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowConfidenceBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
