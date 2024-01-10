import { GET_COUNTRIES, GET_COUNTRIES_NAME, GET_DETAIL } from "../actions";

let initialState = {allCountries: [], countriesCopy: [], detail:{}};

function rootReducer(state = initialState, action){
    switch (action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                allCountries: action.payload,
                countriesCopy: action.payload
            }
        case GET_COUNTRIES_NAME:
            return{
                ...state,
                allCountries: action.payload
            }    

        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload
           }           

        default :
        return state
    }
}

export default rootReducer