import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionItemComponent } from './prediction-item.component';

describe('PredictionItemComponent', () => {
  let component: PredictionItemComponent;
  let fixture: ComponentFixture<PredictionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
