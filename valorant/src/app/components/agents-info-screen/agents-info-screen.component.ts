import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/agents.model';
import { AgentsInfo } from 'src/app/models/agents.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-agents-info-screen',
  templateUrl: './agents-info-screen.component.html',
  styleUrls: ['./agents-info-screen.component.scss']
})

export class AgentsInfoScreenComponent implements OnInit{

  agentAllInfo:AgentsInfo[] = []
  selectedImg!:AgentsInfo
  selectedInfo!:AgentsInfo

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
          console.log(item.role.description);
          this.agentAllInfo.push({
            displayName: item.displayName,
            displayIcon: item.displayIcon,
            bustPortrait: item.bustPortrait,
            isPlayableCharacter: item.isPlayableCharacter,
            abilities: item.abilities,
            description: item.description,
            role: {
              description: item.role.description,
              displayName: item.role.displayName,
              displayIcon: item.role.displayIcon 
            }
          })
        }
      });
      this.selectedImg = response.data[23]
      this.selectedInfo = response.data[23]
    })
  }



  selectImg(image:AgentsInfo): void {
    this.selectedImg = image
  }

  selectInfo(info:AgentsInfo): void {
    this.selectedInfo = info
    
  }

}
