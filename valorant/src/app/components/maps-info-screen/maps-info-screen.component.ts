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
  currentMap:any

  
  constructor(private mapsApi: ApiService){}

  ngOnInit(): void {
    this.takeMaps()

  }

  // next(): void {
  //   this.currentImg = (this.currentImg + 1) % this.maps.length;
  // }

  // prev(): void {
  //   this.currentImg = (this.currentImg - 1 + this.maps.length) % this.maps.length;
  //   if (this.currentImg < 0) {
  //     this.currentImg = this.maps.length - 1;
  //   }
  // }

  takeMaps() {
    this.mapsApi.getMaps().
    subscribe((response:any) => {
      response.data.forEach((item:any) => {
        if(item.narrativeDescription != null) {
          this.maps.push(item)
        }
        this.currentMap = response.data[0]
      });
    }) 
  }

  setCurrentMap(current:any) {
    this.currentMap = this.maps[current]
    
  }
}
