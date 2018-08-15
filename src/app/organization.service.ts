import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor() { }
  company:string[]=['45','49','50'];

  getCompany(){
    return this.company[0];
  }
  getCompany1(){
    return this.company[1];
  }
  getCompany2(){
    return this.company[2];
  }
}
