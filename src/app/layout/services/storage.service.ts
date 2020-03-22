import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  data: any ;

  // constructor(){
    
  // }

  set(data: any) {
    this.data = data;
  }

  get():any{
    return this.data;
  }
  
  clear() {
    this.data = null;
  }
}
