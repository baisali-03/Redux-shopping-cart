//  THREE ACTIONS WILL BE DEFINE IN THIS PAGE
// 1. FOR SET PRODUCT
// 2. FOR SELECT PRODUCT
// 3. FOR REMOVE SELECETD PRODUCT

import { ActionTypes } from "../contants/action-types";
export const setProducts = (product) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: product,
    };
};
export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};