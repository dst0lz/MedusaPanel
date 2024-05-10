import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMessageReasonComponent } from './box-message-reason.component';

describe('BoxMessageReasonComponent', () => {
  let component: BoxMessageReasonComponent;
  let fixture: ComponentFixture<BoxMessageReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxMessageReasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxMessageReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
