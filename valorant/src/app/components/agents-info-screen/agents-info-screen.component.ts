import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/agents.model';
import { AgentsInfo } from 'src/app/models/agents.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-agents-info-screen',
  templateUrl: './agents-info-screen.component.html',
  styleUrls: ['./agents-info-screen.component.scss']
})

export class AgentsInfoScreenComponent implements OnInit {
  
  agentAllInfo:AgentsInfo[] = []
  selectedInfo!:AgentsInfo

  selectedIcon!:AgentsInfo

  constructor (private agentsService: ApiService) {
  }

  ngOnInit():void {
    this.takeInfoAgents()
  }
  
  takeInfoAgents() {
    this.agentsService.getAgents()
    .subscribe((response: any) => {
      response.data.forEach((item:any) => {
        if(item.isPlayableCharacter == true) {
          this.agentAllInfo.push(item)
        }
      });
      this.selectedInfo = response.data[23]
      this.selectedIcon = response.data[23]
    })
  }

  selectInfo(info:AgentsInfo): void {
    this.selectedInfo = info
  }

  selectIcon(icon:any): void {
    this.selectedIcon = icon
  }

}
