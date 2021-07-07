import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/service/server.service';
import * as moment from 'moment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  public jivas = [];
  public cstors = [];
  public vendor: any = false;
  public status: any;
  error: any;
  year: any;
  engine: any;
  constructor() { }

  ngOnInit() {
    this.year = this.getYear()
    let url = window.location.pathname.split('/')
    if (url[2]) {
      this.engine = url[2]
    } else if (url.includes('home')) {
      this.engine = 'home'
    }
  }
  getYear() {
    const d = new Date();
    return d.getFullYear();;

  }
}
