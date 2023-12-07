import { Component, OnInit } from '@angular/core';
import { ImageGifs } from 'src/app/models/image.model';
import { imageGifs } from './gifs.mock';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit{

  gifs:ImageGifs[] = imageGifs
  pass:number = 0
  passGifs:ImageGifs
  time:number = 0

  constructor() {
    this.passGifs = this.gifs[this.pass]
  }

  ngOnInit(): void {
    this.playNextGif()
  }

  timer() {
    if(this.pass == 0) {
      this.time = 3750
    } else {
      this.time = 2420
    }
  }

  playNextGif():void {
    setTimeout(() => {
      
      this.passGifs = this.gifs[this.pass]
      this.pass++
      if(this.pass == 2) {
        this.pass = 0
      }
      this.playNextGif()
      this.timer()
    }, this.time)
  }

  }




