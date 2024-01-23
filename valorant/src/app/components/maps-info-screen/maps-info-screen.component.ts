import { Component, OnInit } from '@angular/core';
import { Maps } from 'src/app/models/maps.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-maps-info-screen',
  templateUrl: './maps-info-screen.component.html',
  styleUrls: ['./maps-info-screen.component.scss']
})
export class MapsInfoScreenComponent implements OnInit{

  maps:Maps[] = [] 
  currentImg:number = 0

  
  constructor(private mapsApi: ApiService){}

  ngOnInit(): void {
    this.takeMaps()
  }

  next(): void {
    this.currentImg = (this.currentImg + 1) % this.maps.length;
  }

  prev(): void {
    this.currentImg = (this.currentImg - 1 + this.maps.length) % this.maps.length;
    if (this.currentImg < 0) {
      this.currentImg = this.maps.length - 1;
    }
  }

  takeMaps() {
    this.mapsApi.getMaps().
    subscribe((response:any) => {
      response.data.forEach((item:any) => {
          this.maps.push(item)
      });
      console.log(this.maps);
    }) 
  }

  setCurrentMap(current: number) {
    this.currentImg = current
  }
}
