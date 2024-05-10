import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxReportReasonComponent } from './box-report-reason.component';

describe('BoxReportReasonComponent', () => {
  let component: BoxReportReasonComponent;
  let fixture: ComponentFixture<BoxReportReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxReportReasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxReportReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
