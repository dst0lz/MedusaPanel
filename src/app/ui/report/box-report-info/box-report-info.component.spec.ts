import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxReportInfoComponent } from './box-report-info.component';

describe('BoxReportInfoComponent', () => {
  let component: BoxReportInfoComponent;
  let fixture: ComponentFixture<BoxReportInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxReportInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxReportInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
