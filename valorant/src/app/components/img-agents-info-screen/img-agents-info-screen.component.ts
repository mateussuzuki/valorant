import { Component, Input } from '@angular/core';
import { ImgAgent } from 'src/app/models/agents.model';

@Component({
  selector: 'app-img-agents-info-screen',
  templateUrl: './img-agents-info-screen.component.html',
  styleUrls: ['./img-agents-info-screen.component.scss']
})
export class ImgAgentsInfoScreenComponent {

  @Input() agentImg!: ImgAgent

  constructor(){

  }


}
