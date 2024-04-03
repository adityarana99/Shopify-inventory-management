import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  pageSize: number = 5; // Number of products per page
  currentPage: number = 1; // Current page
  totalPages: number = 1; // Total pages

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.totalPages = Math.ceil(this.products.length / this.pageSize);
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onAddProduct() {
    // Refresh the product list when a new product is added
    this.loadProducts();
  }


  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(() => {

      // After deletion, reload products or update the product list
      this.loadProducts();
      console.log(`Product with ID ${productId} deleted successfully.`);
      
    }, (error: any) => {
      console.error('Error deleting product:', error);
    });
  }

}
