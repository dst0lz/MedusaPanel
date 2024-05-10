import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPoseidonReportsComponent } from './box-poseidon-reports.component';

describe('BoxPoseidonReportsComponent', () => {
  let component: BoxPoseidonReportsComponent;
  let fixture: ComponentFixture<BoxPoseidonReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPoseidonReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPoseidonReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
