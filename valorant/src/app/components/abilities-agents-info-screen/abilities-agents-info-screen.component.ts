import { Component, Input } from '@angular/core';
import { AbilitieRoleAgent } from 'src/app/models/agents.model';

@Component({
  selector: 'app-abilities-agents-info-screen',
  templateUrl: './abilities-agents-info-screen.component.html',
  styleUrls: ['./abilities-agents-info-screen.component.scss']
})
export class AbilitiesAgentsInfoScreenComponent {
  @Input() selectedImg!:AbilitieRoleAgent
}
