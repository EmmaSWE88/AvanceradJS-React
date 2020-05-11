import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingpageComponent } from './views/landingpage/landingpage.component';
import { FeaturesComponent } from './views/features/features.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductListComponent } from './components/productCatalog/product-list/product-list.component';
import { ProductGridComponent } from './components/productCatalog/product-grid/product-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingpageComponent,
    FeaturesComponent,
    ProductsComponent,
    ProductListComponent,
    ProductGridComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
