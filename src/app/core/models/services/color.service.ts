import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  showFlagColor(isFlagged: boolean): String{
    let red = "#ff4d4d";
    let grey = "#f5f5f5";

    if(isFlagged){
      return red;
    }

    return grey;
  }

  showBoldness(isRead: boolean): String{
    if(isRead){
      return "none";
    }

    return "bold";
  }
}
