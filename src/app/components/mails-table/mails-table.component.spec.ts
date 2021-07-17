import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsTableComponent } from './mails-table.component';

describe('MailsTableComponent', () => {
  let component: MailsTableComponent;
  let fixture: ComponentFixture<MailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
