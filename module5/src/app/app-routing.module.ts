import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';


const routes: Routes = [
  // {path: 'timelines', component: TimelinesComponent},
  // {
  //   path: 'youtube', component: YoutubePlaylistComponent,
  //   children: [{path: ':id', component: YoutubePlayerComponent}]
  // },
  {
    path: 'product',
    loadChildren: () => import('./product/product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./component/category/category.module').then(module => module.CategoryModule)
  },
  // {path: 'product/list', component: ProductListComponent},
  // {path: 'product/create', component: ProductCreateComponent},
  // {path: 'product/edit/:id', component: ProductEditComponent},
  // {path: 'product/delete/:id', component: ProductDeleteComponent},
  {path: 'dictionary', component: DictionaryComponent},
  {path: 'dictionary/:word', component: DictionaryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
