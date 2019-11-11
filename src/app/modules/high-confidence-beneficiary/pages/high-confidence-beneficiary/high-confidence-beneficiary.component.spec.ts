import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighConfidenceBeneficiaryComponent } from './high-confidence-beneficiary.component';

describe('HighConfidenceBeneficiaryComponent', () => {
  let component: HighConfidenceBeneficiaryComponent;
  let fixture: ComponentFixture<HighConfidenceBeneficiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighConfidenceBeneficiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighConfidenceBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
