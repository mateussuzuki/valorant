import { Component, Input } from '@angular/core';
import { Info } from 'src/app/models/agents.model';

@Component({
  selector: 'app-abilities-agents-info-screen',
  templateUrl: './abilities-agents-info-screen.component.html',
  styleUrls: ['./abilities-agents-info-screen.component.scss']
})
export class AbilitiesAgentsInfoScreenComponent {
  @Input() selectedInfo!:Info

  activeTab:string = "Q"

  setActiveTab(tab: string) {
    this.activeTab = tab
  }
  
}
