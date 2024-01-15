import { Component, Input } from '@angular/core';
import { AgentsInfo } from 'src/app/models/agents.model';

@Component({
  selector: 'app-abilities-agents-info-screen',
  templateUrl: './abilities-agents-info-screen.component.html',
  styleUrls: ['./abilities-agents-info-screen.component.scss']
})
export class AbilitiesAgentsInfoScreenComponent {
  @Input() selectedInfo!:AgentsInfo

  activeTab:string = "Q"

  setActiveTab(tab: string) {
    this.activeTab = tab
  }
  
}
