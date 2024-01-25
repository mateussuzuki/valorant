import { Component, Input } from '@angular/core';
import { GunsInfo } from 'src/app/models/guns.model';

@Component({
  selector: 'app-smg-interface',
  templateUrl: './smg-interface.component.html',
  styleUrls: ['./smg-interface.component.scss']
})
export class SmgInterfaceComponent {
  @Input() smgs!:GunsInfo
}
