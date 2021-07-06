import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalHistoryComponent } from './principal-history.component';

describe('PrincipalHistoryComponent', () => {
  let component: PrincipalHistoryComponent;
  let fixture: ComponentFixture<PrincipalHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
