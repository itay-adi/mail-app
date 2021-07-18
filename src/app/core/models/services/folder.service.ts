import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Folder } from '../data/folder.model';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  readonly baseUrl = 'http://localhost:3000/folders';
  private allFolders: Folder[] = []
  private allFolders$ = new BehaviorSubject<Folder[]>(this.allFolders);

  constructor(private httpClient: HttpClient) { }

  async foldersToArray(): Promise<Folder[]>{
    const url = this.baseUrl;

    this.allFolders = await (this.httpClient
                          .get<Folder[]>(url)
                          .toPromise());

    this.allFolders$.next(this.allFolders);

    return(Promise.resolve(this.allFolders));
  }

  getAllFolders(): Observable<Folder[]>{
    return this.allFolders$.asObservable();
  }

  getFolderById(folderId: number): Promise<Folder>{
    const url = `${this.baseUrl}/${folderId}`;

    return this.httpClient
               .get<Folder>(url)
               .toPromise();
  }

  addNewFolder(folder: Folder): Promise<Folder>{
    const url = this.baseUrl;

    let newFolder = this.httpClient
                      .post<Folder>(url, folder)
                      .toPromise();

    return newFolder;
  }

  deleteFolderById(folderId : number): Promise<Folder>{
    const url = `${this.baseUrl}/${folderId}`;

    return this.httpClient
            .delete<Folder>(url)
            .toPromise();
  }
}
