import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCarComponent } from './history-car.component';

describe('HistoryCarComponent', () => {
  let component: HistoryCarComponent;
  let fixture: ComponentFixture<HistoryCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
