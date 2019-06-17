import {initialState} from './store';
import {INIT_PRODUCTS} from "./constant";

function userProducts(state = initialState, action) {
    switch (action.type) {
        case INIT_PRODUCTS:
            return {...state, products: {
                    ...action.products
                }};
        default:
            return state;
    }
}
export default userProducts;