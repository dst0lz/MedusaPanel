import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxReportOverviewComponent } from './box-report-overview.component';

describe('BoxReportOverviewComponent', () => {
  let component: BoxReportOverviewComponent;
  let fixture: ComponentFixture<BoxReportOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxReportOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxReportOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
