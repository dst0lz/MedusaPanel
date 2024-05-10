import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBadgeComponent } from './report-badge.component';

describe('ReportBadgeComponent', () => {
  let component: ReportBadgeComponent;
  let fixture: ComponentFixture<ReportBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
