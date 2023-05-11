import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../../service/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  categoryForm: FormGroup;
  id: number;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCategory(this.id);
    });
  }

  ngOnInit(): void {
  }

  getCategory(id: number) {
    return this.categoryService.getById(id).subscribe(product => {
      this.categoryForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name)
      });
    });
  }

  updateCategory(id: number) {
    const product = this.categoryForm.value;
    this.categoryService.updateCategory(id, product).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('/category/list');
    }, error => {
      console.log(error);
    });
  }
}
