import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  agents:Array<any> = []

  constructor(
    private agentService: AgentService
    ) {
  }



  ngOnInit(): void {
    this.agentService.getAgents().subscribe((response:any) => {
      this.agents = response.data
    })
  }


}
