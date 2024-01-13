import { Component, OnInit } from '@angular/core';
import { Agent, ImgAgent } from 'src/app/models/agents.model';
import { ImagePortraitIcon } from 'src/app/models/image.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-agents-info-screen',
  templateUrl: './agents-info-screen.component.html',
  styleUrls: ['./agents-info-screen.component.scss']
})

export class AgentsInfoScreenComponent implements OnInit{

  agentImg:ImgAgent[] = []

  selectedImg!:ImgAgent

  constructor (private agentsService: ApiService) {
  }

  ngOnInit():void {
    this.takeImg()
  }
  
  takeImg() {
    this.agentsService.getAgents()
    .subscribe((response: any) => {
      for( let i = 0; i < response.data.length; i++) {

        let bustPortrait: string
        let icon: string
        let isPlayableCharacter: boolean
        let bustPortraitIcon = new ImagePortraitIcon()

        bustPortrait = response.data[i].bustPortrait
        icon = response.data[i].displayIcon
        isPlayableCharacter = response.data[i].isPlayableCharacter

        bustPortraitIcon.displayIcon = icon
        bustPortraitIcon.bustPortrait = bustPortrait
        bustPortraitIcon.isPlayableCharacter = isPlayableCharacter

        if(isPlayableCharacter == true) {
          this.agentImg.push(bustPortraitIcon)
        }
        
        console.log(this.agentImg);
      }
    })
  }

  selectImg(image:ImgAgent): void {
    this.selectedImg = image
  }

}
