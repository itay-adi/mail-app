import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/core/models/services/mail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName!: string;
  
  constructor(private mailService: MailService) { }

  ngOnInit(): void {
    this.userName = "Itay Adi Yosef";
  }
}
