import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    this.initForm();
  }

  private initObservables(){
    let id = this.getCurrentMailId();
    
    this.folderService.foldersToArray();
    this.folders$ = this.folderService.getAllFolders();

    this.mail$ = this.mailService.getMailById(id);
    this.mailService.setMailAsRead(id);
  }

  private initForm(){
    this.folderForm = this.formBuilder.group({
                                          name: [""]
                                        });
  }

  private getCurrentMailId(): number{
    return Number(this.route.snapshot.params['id']);
  }

  get(str: String): boolean{
    return true;
  }

  setFolder(){
      this.mailService.setMailFolderId(this.getCurrentMailId(),2);
  }
}
