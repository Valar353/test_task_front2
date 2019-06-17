import {INIT_PRODUCTS} from "./constant";

export function actionInitProducts(products) {
    return {
        type: INIT_PRODUCTS,
        products
    }
};

