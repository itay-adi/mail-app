import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Folder } from 'src/app/core/models/data/folder.model';
import { FolderService } from 'src/app/core/models/services/folder.service';

@Component({
  selector: 'app-folders-list',
  templateUrl: './folders-list.component.html',
  styleUrls: ['./folders-list.component.scss']
})
export class FoldersListComponent implements OnInit {
  allFolders$! : Observable<Folder[]>;

  newFolder!: FormGroup;

  constructor(private folderService: FolderService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.folderService.foldersToArray();
    this.allFolders$ = this.folderService.getAllFolders();

    this.newFolder = this.formBuilder.group({
      name: ["", [Validators.required]]
    });
  }

  addFolder(name: string){
    let folder = {
      id: 0,
      name: name
    };

    this.folderService.addNewFolder(folder).then(()=>{
      this.folderService.foldersToArray();
      this.newFolder.reset();
    });
  }
}
