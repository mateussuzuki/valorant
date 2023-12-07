import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoComponent } from './components/video/video.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoComponent,
    MainScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
