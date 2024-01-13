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
    IconAgentsInfoScreenComponent
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
