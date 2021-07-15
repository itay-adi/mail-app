import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/core/models/services/mail.service';

@Component({
  selector: 'app-curr-state',
  templateUrl: './curr-state.component.html',
  styleUrls: ['./curr-state.component.scss']
})
export class CurrStateComponent implements OnInit {
  totalNumberOfMails$!: Promise<number>;
  numberOfUnreadMails$!: Promise<number>;

  constructor(private mailService: MailService) { }

  ngOnInit(): void {
    this.totalNumberOfMails$ = this.mailService.getTotalNumberOfMails();
    this.numberOfUnreadMails$ = this.mailService.getNumberOfUnreadMails();
  }
}
