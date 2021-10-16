import { omit } from "lodash";
import { ADD_PERSON_FAVORITE, REMOVE_PERSON_FAVORITE } from "../constants/actionTypes";
import { getLocalStorage } from '../../services/localStorage'

const initialState = getLocalStorage('store')

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON_FAVORITE:
            return{
                ...state,
                ...action.payload
            }
        case REMOVE_PERSON_FAVORITE:
            return omit(state, [action.payload])
        default:
            return state
    }
}

export default favoriteReducer