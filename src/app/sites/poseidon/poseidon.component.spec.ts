import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoseidonComponent } from './poseidon.component';

describe('PoseidonComponent', () => {
  let component: PoseidonComponent;
  let fixture: ComponentFixture<PoseidonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoseidonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoseidonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
