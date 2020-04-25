import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsHomeComponent } from './stars-home.component';

describe('StarsHomeComponent', () => {
  let component: StarsHomeComponent;
  let fixture: ComponentFixture<StarsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
