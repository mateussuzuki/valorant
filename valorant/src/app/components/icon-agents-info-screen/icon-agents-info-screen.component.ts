import { Component, Input } from '@angular/core';
import { ImgAgent } from 'src/app/models/agents.model';

@Component({
  selector: 'app-icon-agents-info-screen',
  templateUrl: './icon-agents-info-screen.component.html',
  styleUrls: ['./icon-agents-info-screen.component.scss']
})
export class IconAgentsInfoScreenComponent {

  @Input() agentImg!: ImgAgent

}
