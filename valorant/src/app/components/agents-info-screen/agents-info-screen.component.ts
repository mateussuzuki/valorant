import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/models/agents.model';
import { AgentsInfo } from 'src/app/models/agents.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-agents-info-screen',
  templateUrl: './agents-info-screen.component.html',
  styleUrls: ['./agents-info-screen.component.scss']
})

export class AgentsInfoScreenComponent implements OnInit{

  agentAllInfo:Info[] = []
  selectedImg!:Info
  selectedInfo!:Info

  constructor (private agentsService: ApiService) {
  }

  ngOnInit():void {
    this.takeInfoAgents()
  }
  
  takeInfoAgents() {
    this.agentsService.getAgents()
    .subscribe((response: any) => {
      for( let i = 0; i < response.data.length; i++) {

        let bustPortrait: string
        let icon: string
        let isPlayableCharacter: boolean

        let abilities: [] 
        let description: string
        let role: []

        let infoAgents = new AgentsInfo()

        this.selectedImg = response.data[23]
        this.selectedInfo = response.data[23]

        bustPortrait = response.data[i].bustPortrait
        icon = response.data[i].displayIcon
        isPlayableCharacter = response.data[i].isPlayableCharacter
        abilities = response.data[i].abilities
        description = response.data[i].description
        role = response.data[i].role
        infoAgents.displayIcon = icon
        infoAgents.bustPortrait = bustPortrait
        infoAgents.isPlayableCharacter = isPlayableCharacter
        infoAgents.abilities = abilities
        infoAgents.description = description
        infoAgents.role = role

        if(isPlayableCharacter == true) {
          this.agentAllInfo.push(infoAgents)
          
        }
        
        console.log(this.agentAllInfo);
      }
    })
  }



  selectImg(image:Info): void {
    this.selectedImg = image
  }

  selectInfo(info:Info): void {
    this.selectedInfo = info
    
  }

}
