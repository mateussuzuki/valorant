import { Component, Input } from '@angular/core';
import { GunsInfo } from 'src/app/models/guns.model';

@Component({
  selector: 'app-shotguns-interface',
  templateUrl: './shotguns-interface.component.html',
  styleUrls: ['./shotguns-interface.component.scss']
})
export class ShotgunsInterfaceComponent {
  @Input() shotguns!:GunsInfo
}
