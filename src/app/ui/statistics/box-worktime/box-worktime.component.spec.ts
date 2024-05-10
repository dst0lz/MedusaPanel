import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWorktimeComponent } from './box-worktime.component';

describe('BoxWorktimeComponent', () => {
  let component: BoxWorktimeComponent;
  let fixture: ComponentFixture<BoxWorktimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxWorktimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxWorktimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
