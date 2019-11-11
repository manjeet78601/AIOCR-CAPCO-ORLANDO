import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustDocumentsComponent } from './trust-documents.component';

describe('TrustDocumentsComponent', () => {
  let component: TrustDocumentsComponent;
  let fixture: ComponentFixture<TrustDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
