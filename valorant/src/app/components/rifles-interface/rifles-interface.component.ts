import { Component, Input } from '@angular/core';
import { GunsInfo } from 'src/app/models/guns.model';

@Component({
  selector: 'app-rifles-interface',
  templateUrl: './rifles-interface.component.html',
  styleUrls: ['./rifles-interface.component.scss']
})
export class RiflesInterfaceComponent {
  @Input() rifles!:GunsInfo
}
