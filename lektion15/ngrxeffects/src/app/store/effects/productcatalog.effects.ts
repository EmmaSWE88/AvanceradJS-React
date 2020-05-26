import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { map, mergeMap, catchError} from 'rxjs/operators'
import { of } from 'rxjs'
import { ProductService } from '../services/product.service'
import * as PCA from '../actions/productcatalog.actions'
import { ActionTypes } from '../action.types'

@Injectable()
export class ProductCatalogEffects {
    constructor(private action$: Actions, private productService: ProductService) {}

    @Effect() ProductCatalogLoad$ = this.action$
    .pipe(
        ofType<PCA.ProductCatalogLoad>(ActionTypes.PRODUCTCATALOG_LOAD),
        mergeMap(
            () => this.productService.getProductCatalog()
            .pipe(
                map(data => { return new PCA.ProductCatalogLoadSuccess(data)}),
                catchError(error => of(new PCA.ProductCatalogLoadFailure(error)))
            )
        )
    )
}
