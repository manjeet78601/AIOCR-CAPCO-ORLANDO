import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighConfidenceBeneficiaryDisplayComponent } from './high-confidence-beneficiary-display.component';

describe('HighConfidenceBeneficiaryDisplayComponent', () => {
  let component: HighConfidenceBeneficiaryDisplayComponent;
  let fixture: ComponentFixture<HighConfidenceBeneficiaryDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighConfidenceBeneficiaryDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighConfidenceBeneficiaryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
