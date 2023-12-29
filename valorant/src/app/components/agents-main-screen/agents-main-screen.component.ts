import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';
import { Agent } from 'src/app/models/agents.model';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { __values } from 'tslib';

@Component({
  
  selector: 'app-agents-main-screen',
  templateUrl: './agents-main-screen.component.html',
  styleUrls: ['./agents-main-screen.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({opacity: 0})),
      transition("in<=>out", animate('1s'))
    ])
  ]
})
export class AgentsMainScreenComponent implements OnInit {
  agentsImg: Agent | null = null
  imgFade: string = "in"

  constructor(
    private agentService: AgentService
  ) {
  }

  ngOnInit(): void {
    this.carouselImgAgents()
  }

  switchImg() {
    this.agentService.getAgents()
    .subscribe((response: any) => {
      let numberRandom: number = Math.floor(Math.random() * (response.data.length))
      console.log(numberRandom);
      if (numberRandom !== 9) {
        this.agentsImg = response.data[numberRandom]
      } else {
        numberRandom = Math.floor(Math.random() * (response.data.length))
      }
      console.log(this.agentsImg);
    })

  }

  switchAnimation() {
    this.imgFade = this.imgFade === "in" ? "out" : "in"
  }

  async carouselImgAgents(): Promise<void> {

    await this.switchImg()
    await this.delay(2500)
    await this.switchAnimation()
    await this.delay(1500)
    await this.switchAnimation()
    await this.carouselImgAgents()

  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}
