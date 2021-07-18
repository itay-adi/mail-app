import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators'
import { Mail } from '../data/mail.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  readonly baseUrl = 'http://localhost:3000/mails';
  private allMails: Mail[] = []
  private allMails$ = new BehaviorSubject<Mail[]>(this.allMails);

  constructor(private httpClient: HttpClient) { }

  getTotalNumberOfMails(): Promise<number>{
    const url = this.baseUrl;

    let totalNumberOfMails = this.httpClient
                          .get<Mail[]>(url)
                            .pipe(
                              map(list => list.length))
                            .toPromise();

    return totalNumberOfMails;
  }

  getNumberOfUnreadMails(): Promise<number>{
    const url = this.baseUrl;

    let numberOfUnreadMails = this.httpClient
                          .get<Mail[]>(url)
                            .pipe(
                              map(list => list.filter(mail => mail.isRead === false)),
                              map(list => list.length))
                            .toPromise();

    return numberOfUnreadMails;
  }

  async mailsToArray(): Promise<void>{
    const url = this.baseUrl;

    this.allMails = await (this.httpClient
                          .get<Mail[]>(url)
                          .toPromise());

    this.allMails$.next(this.allMails);
  }

  getAllMails(): Observable<Mail[]>{
    return this.allMails$.asObservable();
  }

  getMailById(mailId: number): Promise<Mail>{
    const url = `${this.baseUrl}/${mailId}`;

    let mail = this.httpClient
                .get<Mail>(url)
                .toPromise();

    return mail;
  }

  setMailAsRead(mailId: number): Promise<Mail>{
    const url = `${this.baseUrl}/${mailId}`;

    return this.httpClient
            .patch<Mail>(url, {"isRead": true})
            .toPromise();
  }

  isMailFlagged(mailId: number): Promise<boolean>{
    const url = `${this.baseUrl}/${mailId}`;

    let isFlagged = this.httpClient
              .get<Mail>(url)
                .pipe(
                  map(m => m.isFlagged)
                )
              .toPromise();

    return isFlagged;
  }

  async setMailFlag(mailId: number): Promise<Mail>{
    const url = `${this.baseUrl}/${mailId}`;

    let isFlagged = await this.isMailFlagged(mailId);

    let mail = this.httpClient
            .patch<Mail>(url, {"isFlagged": (!isFlagged)})
            .toPromise()

    return mail;
  }

  async getMailsByFolderId(folderId: number): Promise<Mail[]>{
    const url = `${this.baseUrl}`;

    let mails = this.httpClient.get<Mail[]>(url)
                                  .pipe(
                                    map(mail => mail.filter(m => m.foldId === folderId)))
                                  .toPromise();

    return mails;                                  
  }

  setMailFolderId(mailId: number, folderId: number): Promise<Mail>{
    const url = `${this.baseUrl}/${mailId}`;

    return this.httpClient
                .patch<Mail>(url, {"foldId": folderId})
                .toPromise();
  }
}
