import { ADD_PERSON_FAVORITE, REMOVE_PERSON_FAVORITE } from '../constants/actionTypes'

export const setPersonToFavorite = person => ({
    type: ADD_PERSON_FAVORITE,
    payload: person
})

export const removePersonFromFavorite = personId => ({
    type: REMOVE_PERSON_FAVORITE,
    payload: personId
})