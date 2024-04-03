import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Output() productAdded: EventEmitter<void> = new EventEmitter<void>();

  product: Product = { 
    id: 0, 
    name: '', 
    description: '', 
    image: '', 
    price: 0 
  };


  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.productService.addProduct(this.product).subscribe(() => {

      this.router.navigate(['/products']);

      // Emit an event to notify the parent component (ProductListComponent) that a new product has been added
      this.productAdded.emit();
      console.log('Product added successfully.');
    }, (error: any) => {
      console.error('Error adding product:', error);
    });
  }

}
