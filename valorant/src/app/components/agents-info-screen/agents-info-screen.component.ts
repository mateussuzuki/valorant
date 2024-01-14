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
        let name:string
        let abilities: [] 
        let description: string
        let role: []

        let infoAgent = new AgentsInfo()

        this.selectedImg = response.data[23]
        this.selectedInfo = response.data[23]

        bustPortrait = response.data[i].bustPortrait
        icon = response.data[i].displayIcon
        isPlayableCharacter = response.data[i].isPlayableCharacter
        name = response.data[i].displayName
        abilities = response.data[i].abilities
        description = response.data[i].description
        role = response.data[i].role

        infoAgent.displayIcon = icon
        infoAgent.bustPortrait = bustPortrait
        infoAgent.isPlayableCharacter = isPlayableCharacter
        infoAgent.displayName = name
        infoAgent.abilities = abilities
        infoAgent.description = description
        infoAgent.role = role


        if(isPlayableCharacter == true) {
          this.agentAllInfo.push(infoAgent)
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
