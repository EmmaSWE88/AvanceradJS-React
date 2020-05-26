import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http'
import { ProductCatalogReducer } from './store/reducers/productcatalog.reducer';
import { ProductCatalogEffects } from './store/effects/productcatalog.effects';
import { CartReducer } from './store/reducers/cart.reducer';
import { CartEffects } from './store/effects/cart.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      productcatalog: ProductCatalogReducer,
      cart: CartReducer
    }, {}),
    EffectsModule.forRoot([ProductCatalogEffects, CartEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
