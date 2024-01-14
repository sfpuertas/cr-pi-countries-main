import { GET_COUNTRIES, GET_COUNTRIES_NAME, GET_DETAIL, GET_ACTIVITIES, GET_FILTER, GET_ORDER_BY, GET_PAGINADO } from "../actions";

let initialState = {allCountries: [], countriesCopy: [], detail:{}, allActivities:[], pagina : 0};

function rootReducer(state = initialState, action){
    switch (action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                allCountries: action.payload,
                countriesCopy: action.payload,
                pagina: 0
            }
        case GET_COUNTRIES_NAME:
            return{
                ...state,
                allCountries: action.payload,
                pagina: 0
            }    

        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload,
                pagina: 0
           }  
        
        case GET_ACTIVITIES:
            return{
                ...state,
                allActivities: action.payload,
                pagina: 0
            }

        case GET_ORDER_BY: {
           
            let ordenados = [...state.allCountries];
               if(action.payload === 'nasc'){
                ordenados.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0;
                })}
                if(action.payload === 'ndes'){
                    ordenados.sort(function (a, b) {
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (b.name > a.name) {
                            return 1;
                        }
                        return 0;
                    })}
                    if(action.payload === 'pasc'){
                    ordenados.sort(function (a, b) {
                        if (a.population > b.population) {
                            return 1;
                        }
                        if (b.population > a.population) {
                            return -1
                        }
                        return 0;
                    })}
                    if(action.payload === 'pdes'){
                        ordenados.sort(function (a, b) {
                            if (a.population > b.population) {
                                return -1;
                            }
                            if (b.population > a.population) {
                                return 1
                            }
                            return 0;
                        })}
                        return{
                            ...state,
                            allCountries : ordenados,
                            pagina: 0
                        }
        }

        case GET_FILTER:
            let filtered =[];
            state.allCountries = state.countriesCopy;
            if(action.payload.name === 'continente'){
                if(action.payload.valor === 'ninguno'){
                    filtered = state.allCountries;
                }else{
                filtered = state.allCountries.filter((c)=> c.continents === action.payload.valor)
                }
            }else{
                if(action.payload.valor === 'ninguno'){
                    filtered = state.allCountries;
                }else{
                filtered = state.allCountries.filter((c)=> c.Activities.find((ca)=>ca.name === action.payload.valor))
                }
            }
            return{
                ...state,
                allCountries : filtered,
                pagina: 0
            }
            case GET_PAGINADO:{
                if(action.payload === 'next'){
                    if((state.pagina +1) * 10 > state.allCountries.length){
                        return{
                            ...state
                        }
                    }else{
                        return{
                            ...state,
                            pagina: (state.pagina + 1)
                        }
                    }
                }else{
                    if(state.pagina === 0){
                        return{
                            ...state
                        }
                    }else{
                        return{
                            ...state,
                            pagina: (state.pagina - 1)
                        }
                    }
                }
            }
        
            

        default :
        return state
    }
}

export default rootReducer