import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxInternReportComponent } from './box-intern-report.component';

describe('BoxInternReportComponent', () => {
  let component: BoxInternReportComponent;
  let fixture: ComponentFixture<BoxInternReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxInternReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxInternReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
