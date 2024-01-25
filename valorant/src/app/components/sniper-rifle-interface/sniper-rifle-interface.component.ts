import { Component, Input } from '@angular/core';
import { GunsInfo } from 'src/app/models/guns.model';

@Component({
  selector: 'app-sniper-rifle-interface',
  templateUrl: './sniper-rifle-interface.component.html',
  styleUrls: ['./sniper-rifle-interface.component.scss']
})
export class SniperRifleInterfaceComponent {
  @Input() sniperRifle!:GunsInfo
}
