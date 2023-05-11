import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categoryList: Category[];
  constructor(private productService: ProductService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.categoryService.getAllCategory().subscribe(categories => this.categoryList = categories);
  }

  getAll() {
    this.productService.getAll().subscribe(products => this.products = products);
  }

  search(name: string, idType: string) {
    this.productService.search(name, idType).subscribe(next => {
      this.products = next;
    });
  }

}
