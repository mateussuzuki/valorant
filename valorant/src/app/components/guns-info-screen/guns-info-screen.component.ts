import { Component, Input, OnInit, Output } from '@angular/core';
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



  currentModal:GunsInfo | null = null


  constructor(private gunsInfo: ApiService) { }

  ngOnInit(): void {
    this.getGuns()
  }

  // getGuns() {
  //   this.gunsInfo.getGuns()
  //     .subscribe((response: any) => {
  //       for (let i = 0; i < response.data.length; i++) {
  //         if (response.data[i].shopData.categoryText == "Heavy Weapons") {
  //           this.machineGun.push(response.data[i])
  //         } else if (response.data[i].shopData.categoryText == "Assault Rifles") {
  //           this.rifles.push(response.data[i])
  //         } else if (response.data[i].shopData.categoryText == "Shotguns") {
  //           this.shotguns.push(response.data[i])
  //         } else if (response.data[i].shopData.categoryText == "Sidearms") {
  //           this.sidearms.push(response.data[i])
  //         } else if (response.data[i].shopData.categoryText == "Sniper Rifles") {
  //           this.sniperRifle.push(response.data[i])
  //         } else if (response.data[i].shopData.categoryText == "SMGs") {
  //           this.smgs.push(response.data[i])
  //         } else if (response.data[i].displayName == "Melee") {
  //           this.melee = response.data[i]
  //         }

  //         console.log(this.machineGun);
  //         console.log(this.rifles);
  //         console.log(this.shotguns);
  //         console.log(this.sidearms);
  //         console.log(this.sniperRifle);
  //         console.log(this.smgs);
  //         console.log(this.melee);
  //         this.currentModal = response.data[2]
  //       }
  //     })
  // }

  getGuns() {
    this.gunsInfo.getGuns()
      .subscribe((response: any) => {
        response.data.forEach((gun:any) => {
          switch (gun.shopData.categoryText) {
            case "Heavy Weapons":
              this.machineGun.push(gun);
              // let split = gun.weaponStats.wallPenetration
              // let a = split.split("::")
              // a = a[a.length - 1]
              // this.machineGun.push(a)

              break;
            case "Assault Rifles":
              this.rifles.push(gun);
              break;
            case "Shotguns":
              this.shotguns.push(gun);
              break;
            case "Sidearms":
              this.sidearms.push(gun);
              console.log(this.sidearms);
              
              break;
            case "Sniper Rifles":
              this.sniperRifle.push(gun);
              break;
            case "SMGs":
              this.smgs.push(gun);
              break;
            case "Melee":
              this.melee = gun
              break
          }
        });
        
        
      });
  }

  setCurrentModal(guns:any) {
    this.currentModal = guns
    
  }

  toggleOff() {
    this.currentModal = null
  }

}
