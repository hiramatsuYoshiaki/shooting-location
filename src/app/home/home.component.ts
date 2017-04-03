import { Component, OnInit } from '@angular/core';

interface RecomendSpot {
    title: string;
    imgLat: number;
    imgLan: number;
}
const RECOMEND_SPOT: RecomendSpot[] = [
  { title: '児島湾干拓地の水田に沈む夕日', imgLat:34.572099626095980,imgLan:133.927060605929 },
  { title: '福山自動車時計博物館', imgLat:34.497818151453984,imgLan:133.36208438886388 },
  { title: '神戸港Ｕｍｉｅモザイクの夜景', imgLat:34.682011,imgLan:135.1866093 }
 
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   zoom: number = 5;
  //center point
  lat: number  = 37.2653099;
  lng: number = 136.8457031;
  recomend_spot:RecomendSpot[] = RECOMEND_SPOT;


  constructor() { }

  ngOnInit() {
  }

}
