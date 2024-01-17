import { Component, OnInit } from '@angular/core';
import { AgentsInfo } from 'src/app/models/agents.model';
import { ApiService } from 'src/app/services/api.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-agents-info-screen',
  templateUrl: './agents-info-screen.component.html',
  styleUrls: ['./agents-info-screen.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({opacity: 0})),
      
      transition("in<=>out", animate('0.2s'))
    ])
  ]
})

export class AgentsInfoScreenComponent implements OnInit {
  
  agentAllInfo:AgentsInfo[] = []
  selectedInfo!:AgentsInfo

  imgFade:string = "in"
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

  async selectInfo(info:AgentsInfo) {
    await this.delay(200)
    this.selectedInfo = info
  }

  selectIcon(icon:any): void {
    this.selectedIcon = icon
  }

  async switchAnimation() {
    this.imgFade = "out"
    await this.delay(200)
    this.imgFade = "in"
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}
