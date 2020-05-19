import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { ProductcatalogReducer } from './store/reducers/productcatalog.reducer';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component'
import { FormsModule } from '@angular/forms';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { LandingPageViewComponent } from './views/landing-page-view/landing-page-view.component';
import { ProductCatalogViewComponent } from './views/product-catalog-view/product-catalog-view.component';
import { ProductViewComponent } from './views/product-view/product-view.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogComponent,
    AddProductFormComponent,
    LandingPageViewComponent,
    ProductCatalogViewComponent,
    ProductViewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot({
      productCatalog : ProductcatalogReducer
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
