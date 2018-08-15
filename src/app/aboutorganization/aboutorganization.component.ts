import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../organization.service';

@Component({
  selector: 'app-aboutorganization',
  templateUrl: './aboutorganization.component.html',
  styleUrls: ['./aboutorganization.component.css']
})
export class AboutorganizationComponent implements OnInit {
 king:string;king1:string;king2:string;
  constructor(private organization:OrganizationService) { }

  ngOnInit() {
    this.king= this.organization.getCompany();
    this.king1= this.organization.getCompany1();
    this.king2= this.organization.getCompany2();
  }

}
