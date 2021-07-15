import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrStateComponent } from './curr-state.component';

describe('CurrStateComponent', () => {
  let component: CurrStateComponent;
  let fixture: ComponentFixture<CurrStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
