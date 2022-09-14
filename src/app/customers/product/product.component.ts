import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products!: Product[];
  constructor(private productService: ProductService) {
  }

  ngOnInit() {

    this.productService.getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
        console.log(this.products);

      })
  }
}
