import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { list_products } from '../../data';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {
public listData = list_products;
public listCategoriesFilter!: string[];

  constructor() { }

  ngOnInit(): void {

    /**
     * Technique avec underscore js pour récuperer les categories des plantes
     */
  const listAllCategories = this.listData.map(product => product.product_breadcrumb_label);
  console.log(listAllCategories);

  const ListUniqCategories = _.uniq(listAllCategories)  //bibliothèque underscorejs
  console.log(ListUniqCategories);

  /**
     * Technique native js v
     */

  const ListUniqJsCategories = [...new Set(listAllCategories)];
  console.log(ListUniqJsCategories);

  this.listCategoriesFilter = ListUniqCategories;

  }

}
