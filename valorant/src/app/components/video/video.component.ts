import { Component, OnInit } from '@angular/core';
import { ImageGifs } from 'src/app/models/image.model';
import { imageGifs } from './gifs.mock';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  gifs:ImageGifs[] = imageGifs
  pass:number = 0
  passGifs:ImageGifs

  constructor() {
    this.passGifs = this.gifs[this.pass]
  }



  }




