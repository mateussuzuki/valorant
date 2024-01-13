import { Component, Input } from '@angular/core';
import { Info } from 'src/app/models/agents.model';

@Component({
  selector: 'app-img-agents-info-screen',
  templateUrl: './img-agents-info-screen.component.html',
  styleUrls: ['./img-agents-info-screen.component.scss']
})
export class ImgAgentsInfoScreenComponent {

  @Input() selectedImg!: Info

  constructor(){

  }


}
