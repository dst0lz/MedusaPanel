import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMessageOverviewComponent } from './box-message-overview.component';

describe('BoxMessageOverviewComponent', () => {
  let component: BoxMessageOverviewComponent;
  let fixture: ComponentFixture<BoxMessageOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxMessageOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxMessageOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
