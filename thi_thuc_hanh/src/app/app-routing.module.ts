import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  // {
  //   path: 'product',
  //   loadChildren: () => import('./component/product/product/product.module').then(module => module.ProductModule)
  // },
  // {
  //   path: 'category',
  //   loadChildren: () => import('./component/category/category.module').then(module => module.CategoryModule)
  // },
  {
    path: 'bds',
    loadChildren: () => import('./component/bds.module').then(module => module.BdsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
