import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Maps } from 'src/app/models/maps.model';

@Component({
  selector: 'app-maps-main-screen',
  templateUrl: './maps-main-screen.component.html',
  styleUrls: ['./maps-main-screen.component.scss']
})
export class MapsMainScreenComponent implements OnInit {

  mapsImg!: Maps;

  constructor(private mapsService: ApiService) {
  }


  ngOnInit(): void {
    this.getMaps()
  }


  getMaps() {
    this.mapsService.getMaps()
      .subscribe((response: any) => {
        let numberRandom: number = Math.floor(Math.random() * (response.data.length))
        this.mapsImg = response.data[numberRandom]
      })
  }

}
