import { Component, OnInit } from '@angular/core';
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

  constructor(private folderService: FolderService) { }

  ngOnInit(): void {
    this.folderService.foldersToArray();
    this.allFolders$ = this.folderService.getAllFolders();
  }

}
