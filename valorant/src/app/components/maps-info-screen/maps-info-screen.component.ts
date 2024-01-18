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
  selectedMap!:Maps

  constructor(private mapsApi: ApiService){}

  ngOnInit(): void {
    this.takeMaps()
  }

  takeMaps() {
    this.mapsApi.getMaps().
    subscribe((response:any) => {
      response.data.forEach((item:any) => {
          this.maps.push(item)
      });
      console.log(this.maps);
      this.selectedMap = response.data[0]
    }) 
  }

  selectMap(item:any) {
    this.selectedMap = item
  }

}
