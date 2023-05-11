import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BdsService} from '../../service/bds.service';
import {TypesService} from '../../service/types.service';
import {CategoriesService} from '../../service/categories.service';
import {CategoryBds} from '../../model/categoryBds';
import {TypeBds} from '../../model/type';

@Component({
  selector: 'app-bds-create',
  templateUrl: './bds-create.component.html',
  styleUrls: ['./bds-create.component.css']
})
export class BdsCreateComponent implements OnInit {
  createForm: FormGroup;
  categories: CategoryBds[];
  types: TypeBds[];

  constructor(private router: Router,
              private bdsService: BdsService,
              private typesService: TypesService,
              private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.typesService.getAll().subscribe(next => {
      this.types = next;
    });
    this.categoriesService.getAll().subscribe(next => {
      this.categories = next;
    });
    this.createForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      region: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required, Validators.min(20)]),
      direction: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(100000000)]),
    });
  }

  submit() {

  }

  submit1() {
    const bds = this.createForm.value;
    this.bdsService.save(bds).subscribe(() => {
      this.createForm.reset();
      alert('Tạo thành công');
      this.router.navigateByUrl('/bds/list');
    }, e => {
      console.log(e);
    });
  }
}
