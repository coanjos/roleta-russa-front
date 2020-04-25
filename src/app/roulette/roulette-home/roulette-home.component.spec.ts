import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouletteHomeComponent } from './roulette-home.component';

describe('RouletteHomeComponent', () => {
  let component: RouletteHomeComponent;
  let fixture: ComponentFixture<RouletteHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouletteHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouletteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
