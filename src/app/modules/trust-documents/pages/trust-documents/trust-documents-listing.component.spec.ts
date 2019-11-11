import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustDocumentsListingComponent } from './trust-documents-listing.component';

describe('TrustDocumentsListingComponent', () => {
  let component: TrustDocumentsListingComponent;
  let fixture: ComponentFixture<TrustDocumentsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustDocumentsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustDocumentsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
