import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';
import { Maps } from 'src/app/models/maps.model';

@Component({
  selector: 'app-maps-main-screen',
  templateUrl: './maps-main-screen.component.html',
  styleUrls: ['./maps-main-screen.component.scss']
})
export class MapsMainScreenComponent implements OnInit {

  mapsImg!: Maps;

  constructor(private agentService: AgentService) {
  }


  ngOnInit(): void {
    this.getMaps()
  }


  getMaps() {
    this.agentService.getMaps()
      .subscribe((response: any) => {
        console.log(response);
        let numberRandom: number = Math.floor(Math.random() * (response.data.length))
        this.mapsImg = response.data[numberRandom]
        console.log(this.mapsImg);
      })
  }

}
