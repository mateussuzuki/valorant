import { Component, Input } from '@angular/core';
import { Maps } from 'src/app/models/maps.model';

@Component({
  selector: 'app-maps-full-img-info-screen',
  templateUrl: './maps-full-img-info-screen.component.html',
  styleUrls: ['./maps-full-img-info-screen.component.scss']
})
export class MapsFullImgInfoScreenComponent {
  @Input() maps!:Maps
  @Input() currentImg = 0
}
