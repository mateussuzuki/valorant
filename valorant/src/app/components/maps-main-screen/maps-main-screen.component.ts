import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-maps-main-screen',
  templateUrl: './maps-main-screen.component.html',
  styleUrls: ['./maps-main-screen.component.scss']
})
export class MapsMainScreenComponent implements OnInit{

  constructor(private agentService:AgentService)
   {
  }


  ngOnInit(): void {
    this.getMaps()
  }


  getMaps() {
    this.agentService.getMaps()
    .subscribe((response: any) => {
      console.log(response);
      
    })
  }

}
