import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Folder } from 'src/app/core/models/data/folder.model';
import { Mail } from 'src/app/core/models/data/mail.model';
import { FolderService } from 'src/app/core/models/services/folder.service';
import { MailService } from 'src/app/core/models/services/mail.service';


@Component({
  selector: 'app-mail-page',
  templateUrl: './mail-page.component.html',
  styleUrls: ['./mail-page.component.scss']
})
export class MailPageComponent implements OnInit {
  mail$!: Promise<Mail>;
  folders$!: Observable<Folder[]>;

  folderForm!: FormGroup;

  constructor(
              private formBuilder: FormBuilder,
              private mailService: MailService,
              private folderService: FolderService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.initObservables();
    this.initForms();
  }

  private initObservables(){
    let id = this.getCurrentMailId();
    
    this.folderService.foldersToArray();
    this.folders$ = this.folderService.getAllFolders();

    this.mail$ = this.mailService.getMailById(id);
    this.mailService.setMailAsRead(id);
  }

  private async initForms(){
    this.folderForm = this.formBuilder.group({
      foldId: new FormControl(0)
    });
  }

  private getCurrentMailId(): number{
    return Number(this.route.snapshot.params['mailId']);
  }

  private async getCurrentFolderId(): Promise<number>{
    let folderId = Number(this.route.snapshot.params['folderId']);

    if(Number.isInteger(folderId)){
      return folderId;
    }

    let mailId = this.getCurrentMailId();

    folderId = (await this.mailService.getMailById(mailId)).foldId;

    if(folderId > 0){
      return folderId;
    }

    return 0;
  }

  updateFolder(){
    let mailId = this.getCurrentMailId();
    let newFolderId = Number(this.folderForm.controls['foldId'].value);
    this.mailService.setMailFolderId(mailId,newFolderId);
  }
}