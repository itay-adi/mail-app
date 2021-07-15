import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/app/core/models/data/mail.model';
import { MailService } from 'src/app/core/models/services/mail.service';

@Component({
  selector: 'app-mails-list',
  templateUrl: './mails-list.component.html',
  styleUrls: ['./mails-list.component.scss']
})
export class MailsListComponent implements OnInit {
  allMails$!: Promise<Mail[]>;

  constructor(private mailService: MailService) { }

  ngOnInit(): void {
    this.allMails$ = this.mailService.getAllMails();
  }
}
