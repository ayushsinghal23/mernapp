import axios from 'axios'
import * as actionTypes from '../constants/AddItemConstants'

export const addingItem=(addProductDetails)=>{

    return async(dispatch)=>{
        dispatch({type:actionTypes.ADD_PRODUCT_DETAILS_REQUEST})
        const res=await axios.post("/api/product/additem",{
            ...addProductDetails
        });
        if(res.status === 201){
            const { message } = res.data;
            dispatch({
                type: actionTypes.ADD_PRODUCT_DETAILS_SUCCESS,
                payload: {message}
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: actionTypes.ADD_PRODUCT_DETAILS_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }


}