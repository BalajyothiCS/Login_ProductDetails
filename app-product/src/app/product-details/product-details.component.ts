import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from '../services/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productData;
  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductDetailsService
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.productService
      .getProductDetails(id)
      .subscribe((res) => (this.productData = res));
  }
}
