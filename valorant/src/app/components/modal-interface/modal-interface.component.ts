import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GunsInfo } from 'src/app/models/guns.model';

@Component({
  selector: 'app-modal-interface',
  templateUrl: './modal-interface.component.html',
  styleUrls: ['./modal-interface.component.scss']
})
export class ModalInterfaceComponent {
  @Input() guns!:GunsInfo
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  
  toggleOff() {
    this.close.emit()
  }
}
