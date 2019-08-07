import { combineReducers } from 'redux';
import {
    GET_USER
} from '../actions';

const initState = {};

const main = (state = initState, action) => {
    switch(action.type) {
        case GET_USER:
            return {
                payload: action.payload
            }
        default:
            return state
    }
}

export default combineReducers({ main });