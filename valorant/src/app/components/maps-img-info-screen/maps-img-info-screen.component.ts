import { Component, Input } from '@angular/core';
import { Maps } from 'src/app/models/maps.model';

@Component({
  selector: 'app-maps-img-info-screen',
  templateUrl: './maps-img-info-screen.component.html',
  styleUrls: ['./maps-img-info-screen.component.scss']
})
export class MapsImgInfoScreenComponent {

  @Input() maps!:Maps
  @Input() currentImg = 0

}
