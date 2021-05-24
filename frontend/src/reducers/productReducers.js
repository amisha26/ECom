const productListReducer = (state = {products:[]}, action) => {
    switch (action.type){
        case 'PRODUCT_LIST_REQUEST': //making a request
            return{loading: true, products:[]}
        
        case 'PRODUCT_LIST_SUCCESS': //if request is a success
            return{ loading:false, products: action.payload }

        case 'PRODUCT_LIST_FAILS': //if request fails
            return { loading: false, error: action.payload}
        
        default:
            return state
    }
};

export default productListReducer;