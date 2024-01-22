import { Component, Input } from '@angular/core';
import { Maps } from 'src/app/models/maps.model';

@Component({
  selector: 'app-maps-infos-info-screen',
  templateUrl: './maps-infos-info-screen.component.html',
  styleUrls: ['./maps-infos-info-screen.component.scss']
})
export class MapsInfosInfoScreenComponent {

  @Input() maps!:Maps

}
