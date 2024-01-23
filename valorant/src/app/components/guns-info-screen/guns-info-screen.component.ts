import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-guns-info-screen',
  templateUrl: './guns-info-screen.component.html',
  styleUrls: ['./guns-info-screen.component.scss']
})
export class GunsInfoScreenComponent implements OnInit{

  constructor(private guns:ApiService){}

  ngOnInit(): void {
    this.getGuns()
  }

  getGuns() {
    this.guns.getGuns()
    .subscribe((response:any) => {
      console.log(response);
      
    })
  }
  
}
