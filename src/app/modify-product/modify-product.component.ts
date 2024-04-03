import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

  productId!: number;
  product!: Product;


  constructor(private route: ActivatedRoute,
    private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.productId = idParam ? +idParam : 0;

    this.productService.getProduct(this.productId).subscribe(product => {
      this.product = product;
    });
  }

  onSubmit() {
    this.productService.updateProduct(this.productId, this.product).subscribe(() => {
      // Redirect to product list after modifying the product
      this.router.navigate(['/products']);
    });
  }

}
