import { NgModule } from '@angular/core';

import { Routes, RouterModule} from '@angular/router'
import { LandingPageViewComponent } from './views/landing-page-view/landing-page-view.component';
import { ProductViewComponent } from './views/product-view/product-view.component';
import { ProductCatalogViewComponent } from './views/product-catalog-view/product-catalog-view.component';

const routes: Routes = [
  //Här ska alla routes ligga 
  { path: '', component: LandingPageViewComponent},
  { path: 'products', component:ProductCatalogViewComponent},
  { path: 'products/:id', component: ProductViewComponent}
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
