import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { GunsCollection } from 'src/app/models/gunsCollection.model';

@Component({
  selector: 'app-guns-main-screen',
  templateUrl: './guns-main-screen.component.html',
  styleUrls: ['./guns-main-screen.component.scss']
})
export class GunsMainScreenComponent implements OnInit {

  gunsCollectionImg!:GunsCollection

  constructor(
    private GunsCollection:ApiService
  ){}

  ngOnInit(): void {
    this.getGunsCollection()
  }




  getGunsCollection() {
    this.GunsCollection.getGunsCollection()
      .subscribe((response: any) => {
        console.log(response);
        let numberRandom: number = Math.floor(Math.random() * (response.data.length))
        this.gunsCollectionImg = response.data[numberRandom]
        console.log(this.gunsCollectionImg);
      })
  }
}
