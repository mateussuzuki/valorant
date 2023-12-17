import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';
import { Agent } from 'src/app/models/agents.model';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { __values } from 'tslib';


@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({opacity: 0})),
      transition("in<=>out", animate('0.6s'))
    ])
  ]
})
export class MainScreenComponent implements OnInit {

  agents:Agent | null = null 
  agentsImgMain:Agent | null = null
  imgFade: string = "in"

  constructor(
    private agentService: AgentService
    ) {
  }
  
  ngOnInit(): void {
    this.carouselImgAgents()
  }

  switchImg(): Promise<any> {
    return new Promise((resolve) => {
      this.agentService.getAgents().subscribe((response:any) => {
        let numberRandom:number = Math.floor(Math.random() * (response.data.length))
        console.log(numberRandom);
        if(numberRandom == 9) {
          numberRandom = Math.floor(Math.random() * (response.data.length))
        }
        this.agentsImgMain = response.data[numberRandom]
        console.log(this.agentsImgMain);
      })    
      setTimeout(() => {

        resolve("")
      }, 1600)
    })
    
  }

  switchAnimation() {
    
    this.imgFade = this.imgFade === "in" ? "out": "in"
  }

  carouselImgAgents(): void {
    this.switchImg().then(() => {
      setTimeout(()=> {
        this.switchAnimation()
        setTimeout(()=> {
          this.switchAnimation()
          this.carouselImgAgents()
        }, 600)
      }, 600)
    })
    
  
  }
}

