
import actionTypes from "./action-types";
import {combineReducers} from "redux";

export function listView(state = true, action) {
    switch (action.type) {
      case actionTypes.SET_LIST_VIEW:
        return action.payload;
      default:
        return state
    }
}

export function clothes(state = [], action) {
    switch (action.type) {
      case actionTypes.SET_CLOTHES:
        return [...action.payload];
      default:
        return state
    }
}

export function buyClothes(state = [], action) {
    switch (action.type) {
        case actionTypes.ADD_BUY_CLOTH: 
            return [...state, action.payload];
        case actionTypes.REMOVE_BUY_CLOTH:
            return state.filter(clothes => action.payload.id !== clothes.id);
        case actionTypes.SET_BUY_CLOTH:
            return [...action.payload];
        default:
            return state
    }
}

export default combineReducers({ 
    listView, 
    clothes,
    buyClothes, 
})
