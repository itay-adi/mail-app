import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mail } from 'src/app/core/models/data/mail.model';
import { ColorService } from 'src/app/core/models/services/color.service';
import { MailService } from 'src/app/core/models/services/mail.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
