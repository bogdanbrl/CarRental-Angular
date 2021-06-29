import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRentsComponent } from './show-rents.component';

describe('ShowRentsComponent', () => {
  let component: ShowRentsComponent;
  let fixture: ComponentFixture<ShowRentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
