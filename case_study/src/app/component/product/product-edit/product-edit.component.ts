import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from '../../../model/category';
import {CategoryService} from '../../../service/category.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  categoryList: Category[];
  id: number;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    await this.categoryService.getAllCategory().subscribe(next => {
      this.categoryList = next;
    });

    await this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        const key = +paramMap.get('id');
        this.id = key;
        this.productService.getById(key).subscribe(data => {
          this.productForm = new FormGroup({
            name: new FormControl(data.name, [Validators.required]),
            price: new FormControl(data.price, [Validators.required]),
            description: new FormControl(data.description, [Validators.required]),
            category: new FormControl(this.categoryList.filter(item => item.id === data.category.id)[0], [Validators.required])
          });
        });
      }
    );
  }

  // getProduct(id: number) {
  //   return this.productService.getById(id).subscribe(product => {
  //     this.productForm = new FormGroup({
  //       id: new FormControl(product.id),
  //       name: new FormControl(product.name),
  //       price: new FormControl(product.price),
  //       description: new FormControl(product.description),
  //     });
  //   });
  // }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('/product/list');
    }, error => {
      console.log(error);
    });
  }
}
