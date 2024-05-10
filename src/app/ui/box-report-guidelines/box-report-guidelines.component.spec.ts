import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxReportGuidelinesComponent } from './box-report-guidelines.component';

describe('BoxReportGuidelinesComponent', () => {
  let component: BoxReportGuidelinesComponent;
  let fixture: ComponentFixture<BoxReportGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxReportGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxReportGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
