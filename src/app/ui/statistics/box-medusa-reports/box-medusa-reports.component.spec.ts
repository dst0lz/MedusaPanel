import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMedusaReportsComponent } from './box-medusa-reports.component';

describe('BoxMedusaReportsComponent', () => {
  let component: BoxMedusaReportsComponent;
  let fixture: ComponentFixture<BoxMedusaReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxMedusaReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxMedusaReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
