import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustDocumentsDisplayComponent } from './trust-documents-display.component';

describe('TrustDocumentsDisplayComponent', () => {
  let component: TrustDocumentsDisplayComponent;
  let fixture: ComponentFixture<TrustDocumentsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustDocumentsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustDocumentsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
