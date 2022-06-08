

import actionTypes from "./action-types";
import axios from "axios";
import constants from "../constants";

export function setListView(value) {
    return {
        type: actionTypes.SET_LIST_VIEW,
        payload: value,
    }
}

export function setClothes(value) {
    return {
        type: actionTypes.SET_CLOTHES,
        payload: value,
    }
}

export function addBuyCloth(cloth) {
    return {
        type: actionTypes.ADD_BUY_CLOTH,
        payload: cloth,
    }
}

export function removeBuyCloth(cloth) {
    return {
        type: actionTypes.REMOVE_BUY_CLOTH,
        payload: cloth,
    }
}

export function setBuyClothes(clothes) {
    return {
        type: actionTypes.SET_BUY_CLOTHES,
        payload: clothes,
    }
}

export function getClothes(path, params) {
    return async (dispatch) => {
        try {
            axios.get(`${constants.baseUrl}${path}` , {
                params: {...params, api_key: constants.apiKey}
            })
            .then(response => {
                dispatch(setClothes(response.data.results));
            })
        } catch (error){
            console.log(error);
        }
    }
}
