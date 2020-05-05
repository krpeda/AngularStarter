import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Details";
  product: IProduct;
  errorMessage: string;
  imageWidth: number = 150;
  imageMargin: number = 5;

  constructor(private route: ActivatedRoute,
    private router: Router, private productService : ProductService) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.productService.getProducts().subscribe(products =>{
      this.product = products.find(product => product.productId == id)
    });

  }

  onBack(): void {
    this.router.navigate(['/products']);   
  }

}
