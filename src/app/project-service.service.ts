import { Injectable } from '@angular/core';
import { ThrowStmt } from '../../node_modules/@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor() { }
  user:string[] = ['24','25','30'];

  getUser(){
    return this.user[0];
    
  }
  getUser1(){
    return this.user[1];
  }
  getUser2(){
    return this.user[2];
  }

}
