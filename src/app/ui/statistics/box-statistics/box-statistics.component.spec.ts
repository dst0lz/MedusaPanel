import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxStatisticsComponent } from './box-statistics.component';

describe('BoxStatisticsComponent', () => {
  let component: BoxStatisticsComponent;
  let fixture: ComponentFixture<BoxStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
