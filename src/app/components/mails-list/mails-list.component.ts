import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mail } from 'src/app/core/models/data/mail.model';
import { MailService } from 'src/app/core/models/services/mail.service';

@Component({
  selector: 'app-mails-list',
  templateUrl: './mails-list.component.html',
  styleUrls: ['./mails-list.component.scss']
})
export class MailsListComponent implements OnInit {
  allMails$!: Observable<Mail[]>;

  red = "#ff4d4d";
  grey = "#f5f5f5";

  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.mailService.mailsToArray();
    this.allMails$ = this.mailService.getAllMails();
  }

  changeFlagColor(mailId: number | undefined){
    this.mailService.setMailFlag(Number(mailId)).then(() => this.mailService.mailsToArray());
  }

  /*async currentFlagColor(mailId: number | undefined): Promise<String>{
    let isFlagged = await this.mailService.isMailFlagged(Number(mailId));

    if(true == isFlagged){
      return this.red;
    }
    
    return this.grey;
  }*/
}
