import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mail } from 'src/app/core/models/data/mail.model';
import { MailService } from 'src/app/core/models/services/mail.service';

@Component({
  selector: 'app-mail-page',
  templateUrl: './mail-page.component.html',
  styleUrls: ['./mail-page.component.scss']
})
export class MailPageComponent implements OnInit {
  mail$!: Promise<Mail>;

  constructor(private mailService: MailService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.getCurrentMailId();

    this.mail$ = this.mailService.getMailById(id);
    this.mailService.setMailAsRead(id);
  }

  private getCurrentMailId(): number{
    return Number(this.route.snapshot.params['id']);
  }
}
