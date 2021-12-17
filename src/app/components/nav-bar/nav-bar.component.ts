import { Component, OnInit } from '@angular/core';
import { ProductService } from 'services/product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  likeCounter: number;
  constructor(private productService: ProductService) {
    this.likeCounter = 0;
  }

  ngOnInit(): void {
    this.productService.plantLiked$.subscribe(()=>{
      console.log('Get new event from Subject');
      this.likeCounter ++;
    })
  }

}
