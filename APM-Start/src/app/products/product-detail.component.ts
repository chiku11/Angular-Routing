import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

import {ActivatedRoute,Router} from '@angular/router'

@Component({
    templateUrl: './app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
   
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private productService: ProductService, private _router:Router,private _route:ActivatedRoute) {
     }

     ngOnInit(): void {
        this._route.paramMap.subscribe(data=>{
            let id = +data.get('id');
            this.getProduct(id);
        })
    }

    getProduct(id: number) {
        this.productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }
}
