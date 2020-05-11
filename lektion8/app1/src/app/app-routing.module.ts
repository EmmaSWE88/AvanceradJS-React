import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './views/landingpage/landingpage.component';
import { FeaturesComponent } from './views/features/features.component';
import { ProductsComponent } from './views/products/products.component';




const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'products', component: ProductsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
