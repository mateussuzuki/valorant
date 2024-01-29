import { Component, Input } from '@angular/core';
import { Maps } from 'src/app/models/maps.model';

@Component({
  selector: 'app-maps-vertical-images',
  templateUrl: './maps-vertical-images.component.html',
  styleUrls: ['./maps-vertical-images.component.scss']
})
export class MapsVerticalImagesComponent {
  @Input() maps!:Maps
}
