import {Component, OnInit} from '@angular/core';
import {TypeBds} from '../../model/type';
import {Bds} from '../../model/bds';
import {CategoryBds} from '../../model/categoryBds';
import {TypesService} from '../../service/types.service';
import {CategoriesService} from '../../service/categories.service';
import {BdsService} from '../../service/bds.service';

@Component({
  selector: 'app-bds-list',
  templateUrl: './bds-list.component.html',
  styleUrls: ['./bds-list.component.css']
})
export class BdsListComponent implements OnInit {
  bdsList: Bds[] = [];
  categories: CategoryBds[];
  types: TypeBds[];

  constructor(private bdsService: BdsService,
              private typesService: TypesService,
              private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.typesService.getAll().subscribe(types => this.types = types);
    this.categoriesService.getAll().subscribe(categories => this.categories = categories);
  }

  getAll() {
    this.bdsService.getAll().subscribe(bdsList => this.bdsList = bdsList);
  }

  search(area: string, price: string, direction: string) {
    this.bdsService.search(area, price, direction).subscribe(next => {
      this.bdsList = next;
    });
  }
}
