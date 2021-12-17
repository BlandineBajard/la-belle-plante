import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  avis: string[];

  constructor() {
    this.avis=['star', 'star', 'star', 'star', 'star'];
  }

  ngOnInit(): void {
  }

  starfill(indexStar:number){
    for (let i=0; i< this.avis.length;i++){
      if(i <= indexStar) {
        this.avis[i] = 'star-fill';
      } else {
        this.avis[i] = 'star';
      }
    }

      }

        onMouseLeave() {
    // this.starState = ['star', 'star', 'star', 'star', 'star'];
    this.avis = this.avis.map(x => x = 'star');
  }

}
