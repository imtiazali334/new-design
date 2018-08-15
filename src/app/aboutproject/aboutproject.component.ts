import { Component, OnInit } from '@angular/core';
import {ProjectServiceService} from '../project-service.service'

@Component({
  selector: 'app-aboutproject',
  templateUrl: './aboutproject.component.html',
  styleUrls: ['./aboutproject.component.css']
})
export class AboutprojectComponent implements OnInit {
  users:string;users1:string;users2:string;
  constructor(private projectservice:ProjectServiceService) { }

  ngOnInit() {
   this.users = this.projectservice.getUser();
   this.users1 = this.projectservice.getUser1();
   this.users2 = this.projectservice.getUser2();
  }

}
