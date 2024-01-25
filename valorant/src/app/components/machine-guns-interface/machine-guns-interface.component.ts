import { Component, Input } from '@angular/core';
import { GunsInfo } from 'src/app/models/guns.model';

@Component({
  selector: 'app-machine-guns-interface',
  templateUrl: './machine-guns-interface.component.html',
  styleUrls: ['./machine-guns-interface.component.scss']
})
export class MachineGunsInterfaceComponent {
  @Input() machineGun!:GunsInfo
}
