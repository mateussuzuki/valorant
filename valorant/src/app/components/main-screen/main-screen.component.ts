import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AgentService } from '../services/agent.service';
import { Agent } from 'src/app/models/agents.model';
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  agents:Agent | null = null 

  constructor(
    private agentService: AgentService
    ) {
  }



  ngOnInit(): void {
    this.agentService.getAgents().subscribe((response:any) => {
      
      const numberRandom:number = Math.floor(Math.random() * (response.data.length))
      this.agents = response.data[numberRandom]
      console.log(this.agents);
    })
  }


}
