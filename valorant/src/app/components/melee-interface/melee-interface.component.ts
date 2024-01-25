import { Component, Input } from '@angular/core';
import { GunsInfo } from 'src/app/models/guns.model';

@Component({
  selector: 'app-melee-interface',
  templateUrl: './melee-interface.component.html',
  styleUrls: ['./melee-interface.component.scss']
})
export class MeleeInterfaceComponent {
  @Input() melee!:GunsInfo
}
