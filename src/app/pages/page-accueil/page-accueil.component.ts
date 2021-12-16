import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'services/product.service';
import * as _ from 'underscore';


@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {
  listData: any;

  public listCategoriesFilter!: string[];

  constructor(private productService: ProductService) {
  }


  ngOnInit(): void {

    this.productService.getData().subscribe((data: any) => {
      this.listData = data;
      console.log(data);

      /**
   * Technique avec underscore js pour récuperer les categories des plantes
   */
      const listAllCategories = this.listData.map((product: { product_breadcrumb_label: any; }) => product.product_breadcrumb_label);
      console.log(listAllCategories);

      const ListUniqCategories = _.uniq(listAllCategories)  //bibliothèque underscorejs
      console.log(ListUniqCategories);

      /**
     * Technique native js pour récuperer les categories des plantes
     */

      const ListUniqJsCategories = [...new Set(listAllCategories)];
      console.log(ListUniqJsCategories);

      this.listCategoriesFilter = ListUniqCategories;

    });


  }

}
