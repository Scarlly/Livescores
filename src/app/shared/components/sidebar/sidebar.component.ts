import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ligas=[
    {
      img:'premiere_league',
      name:'Premiere League'
    },
    {
      img:'libertadores',
      name:'Libertadores'
    },
    {
      img:'bundesliga',
      name:'Bundesliga'
    },
    {
      img:'premiere_league',
      name:'Premiere League'
    },
    {
      img:'libertadores',
      name:'Libertadores'
    },
    {
      img:'bundesliga',
      name:'Bundesliga'
    },
  ]

  ngOnInit() {
  }

}
