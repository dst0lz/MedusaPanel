import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPoseidonComponent } from './box-poseidon.component';

describe('BoxPoseidonComponent', () => {
  let component: BoxPoseidonComponent;
  let fixture: ComponentFixture<BoxPoseidonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxPoseidonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPoseidonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
