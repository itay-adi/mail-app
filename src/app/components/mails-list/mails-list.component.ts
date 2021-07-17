import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mail } from 'src/app/core/models/data/mail.model';
import { ColorService } from 'src/app/core/models/services/color.service';
import { MailService } from 'src/app/core/models/services/mail.service';

@Component({
  selector: 'app-mails-list',
  templateUrl: './mails-list.component.html',
  styleUrls: ['./mails-list.component.scss']
})
export class MailsListComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    
  }
}
