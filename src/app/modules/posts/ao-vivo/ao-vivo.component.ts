import { Component, OnInit } from '@angular/core';

export interface TeamTable {
  time1: string;
  placar: string;
  time2: string;
  data: string;
  img1: string;
  img2: string;
}

const TEAM_TABLE: TeamTable[] = [
  { time1:'Real Madrid', placar: '2:1',time2: 'Barcelona', data: '08/07 14:30' ,img1: 'realMadrid',img2:'barcelona'},
  { time1:'Real Madrid', placar: '2:1',time2: 'Barcelona', data: '08/07 14:30' ,img1: 'realMadrid',img2:'barcelona'},
  { time1:'Real Madrid', placar: '2:1',time2: 'Barcelona', data: '08/07 14:30' ,img1: 'realMadrid',img2:'barcelona'},
  { time1:'Real Madrid', placar: '2:1',time2: 'Barcelona', data: '08/07 14:30' ,img1: 'realMadrid',img2:'barcelona'},
  { time1:'Real Madrid', placar: '2:1',time2: 'Barcelona', data: '08/07 14:30' ,img1: 'realMadrid',img2:'barcelona'},
];

@Component({
  selector: 'app-ao-vivo',
  templateUrl: './ao-vivo.component.html',
  styleUrls: ['./ao-vivo.component.scss']
})
export class AoVivoComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['time1', 'placar', 'time2','data'];
  dataSource = TEAM_TABLE;

  ngOnInit() {
  }

}
