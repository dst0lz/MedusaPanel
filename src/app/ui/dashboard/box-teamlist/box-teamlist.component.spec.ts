import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTeamlistComponent } from './box-teamlist.component';

describe('BoxTeamlistComponent', () => {
  let component: BoxTeamlistComponent;
  let fixture: ComponentFixture<BoxTeamlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxTeamlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTeamlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
