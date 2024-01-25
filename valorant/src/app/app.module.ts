import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoComponent } from './components/video/video.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgentsMainScreenComponent } from './components/agents-main-screen/agents-main-screen.component';
import { MapsMainScreenComponent } from './components/maps-main-screen/maps-main-screen.component';
import { GunsMainScreenComponent } from './components/guns-main-screen/guns-main-screen.component';
import { AgentsInfoScreenComponent } from './components/agents-info-screen/agents-info-screen.component';
import { ImgAgentsInfoScreenComponent } from './components/img-agents-info-screen/img-agents-info-screen.component';
import { IconAgentsInfoScreenComponent } from './components/icon-agents-info-screen/icon-agents-info-screen.component';
import { AbilitiesAgentsInfoScreenComponent } from './components/abilities-agents-info-screen/abilities-agents-info-screen.component';
import { MapsInfoScreenComponent } from './components/maps-info-screen/maps-info-screen.component';
import { MapsFullImgInfoScreenComponent } from './components/maps-full-img-info-screen/maps-full-img-info-screen.component';
import { MapsInfosInfoScreenComponent } from './components/maps-infos-info-screen/maps-infos-info-screen.component';
import { GunsInfoScreenComponent } from './components/guns-info-screen/guns-info-screen.component';
import { SidearmsInterfaceComponent } from './components/sidearms-interface/sidearms-interface.component';
import { SmgInterfaceComponent } from './components/smg-interface/smg-interface.component';
import { ShotgunsInterfaceComponent } from './components/shotguns-interface/shotguns-interface.component';
import { RiflesInterfaceComponent } from './components/rifles-interface/rifles-interface.component';
import { MeleeInterfaceComponent } from './components/melee-interface/melee-interface.component';
import { SniperRifleInterfaceComponent } from './components/sniper-rifle-interface/sniper-rifle-interface.component';
import { MachineGunsInterfaceComponent } from './components/machine-guns-interface/machine-guns-interface.component';
import { ModalInterfaceComponent } from './components/modal-interface/modal-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoComponent,
    MainScreenComponent,
    AgentsMainScreenComponent,
    MapsMainScreenComponent,
    GunsMainScreenComponent,
    AgentsInfoScreenComponent,
    ImgAgentsInfoScreenComponent,
    IconAgentsInfoScreenComponent,
    AbilitiesAgentsInfoScreenComponent,
    MapsInfoScreenComponent,
    MapsFullImgInfoScreenComponent,
    MapsInfosInfoScreenComponent,
    GunsInfoScreenComponent,
    SidearmsInterfaceComponent,
    SmgInterfaceComponent,
    ShotgunsInterfaceComponent,
    RiflesInterfaceComponent,
    MeleeInterfaceComponent,
    SniperRifleInterfaceComponent,
    MachineGunsInterfaceComponent,
    ModalInterfaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
