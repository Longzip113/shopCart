import * as types from '../constans/index'

export const listProduct = () =>{
    return {
        type: types.LIST_PRODUCT
    }
}

export const addToCart = (product, quantity) =>{
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const onChangeMessage = (message) =>{
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const deleteToCart = (product) =>{
    return {
        type: types.DELETE_TO_CART,
        product
    }
}

export const updateToCart = (typeUpdate) =>{
    return {
        type: types.UPDATE_TO_CART,
        typeUpdate
    }
}