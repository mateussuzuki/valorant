import { Component, Input } from '@angular/core';
import { GunsInfo } from 'src/app/models/guns.model';

@Component({
  selector: 'app-sidearms-interface',
  templateUrl: './sidearms-interface.component.html',
  styleUrls: ['./sidearms-interface.component.scss']
})
export class SidearmsInterfaceComponent {
  @Input() sidearms!: GunsInfo
}
