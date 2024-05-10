import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTeamspeakComponent } from './box-teamspeak.component';

describe('BoxTeamspeakComponent', () => {
  let component: BoxTeamspeakComponent;
  let fixture: ComponentFixture<BoxTeamspeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxTeamspeakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTeamspeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
