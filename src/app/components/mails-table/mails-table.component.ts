import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Mail } from 'src/app/core/models/data/mail.model';
import { ColorService } from 'src/app/core/models/services/color.service';
import { MailService } from 'src/app/core/models/services/mail.service';

@Component({
  selector: 'app-mails-table',
  templateUrl: './mails-table.component.html',
  styleUrls: ['./mails-table.component.scss']
})
export class MailsTableComponent implements OnInit {
  allMails$!: Observable<Mail[]>;

  constructor(private mailService: MailService,
              private colorService: ColorService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    let index = this.getCurrentFolderId();
    this.mailService.mailsToArray();

    if(Number.isInteger(index))
    {
      this.allMails$ = this.mailService.getAllMails()
                                       .pipe(
                                         map(mail => mail.filter(m => m.folderId === index))
                                       )
    }

    else{
      this.allMails$ = this.mailService.getAllMails();
    }
  }

  changeFlagColor(mailId: number | undefined){
    this.mailService.setMailFlag(Number(mailId)).then(() => this.mailService.mailsToArray());
  }

  showFlagColor(isFlagged: boolean): String{
    return this.colorService.showFlagColor(isFlagged);
  }

  showBoldness(isRead: boolean): String{
    return this.colorService.showBoldness(isRead);
  }

  private getCurrentFolderId(): number{
    return Number(this.route.snapshot.params['id']);
  }
}
