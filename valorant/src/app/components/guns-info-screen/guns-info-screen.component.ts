import { Component, OnInit } from '@angular/core';
import { GunsInfo } from 'src/app/models/guns.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-guns-info-screen',
  templateUrl: './guns-info-screen.component.html',
  styleUrls: ['./guns-info-screen.component.scss']
})
export class GunsInfoScreenComponent implements OnInit {

  melee!:GunsInfo
  sidearms: GunsInfo[] = []
  smgs: GunsInfo[] = []
  shotguns: GunsInfo[] = []
  rifles: GunsInfo[] = []
  sniperRifle: GunsInfo[] = []
  machineGun: GunsInfo[] = []


  show: boolean = false

  toggle() {
    this.show = true
  }


  constructor(private gunsInfo: ApiService) { }

  ngOnInit(): void {
    this.getGuns()
  }

  getGuns() {
    this.gunsInfo.getGuns()
      .subscribe((response: any) => {
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].shopData.categoryText == "Heavy Weapons") {
            this.machineGun.push(response.data[i])
          } else if (response.data[i].shopData.categoryText == "Assault Rifles") {
            this.rifles.push(response.data[i])
          } else if (response.data[i].shopData.categoryText == "Shotguns") {
            this.shotguns.push(response.data[i])
          } else if (response.data[i].shopData.categoryText == "Sidearms") {
            this.sidearms.push(response.data[i])
          } else if (response.data[i].shopData.categoryText == "Sniper Rifles") {
            this.sniperRifle.push(response.data[i])
          } else if (response.data[i].shopData.categoryText == "SMGs") {
            this.smgs.push(response.data[i])
          } else if (response.data[i].displayName == "Melee") {
            this.melee = response.data[i]
          }

          console.log(this.machineGun);
          console.log(this.rifles);
          console.log(this.shotguns);
          console.log(this.sidearms);
          console.log(this.sniperRifle);
          console.log(this.smgs);
          console.log(this.melee);
        }
      })
  }

}
