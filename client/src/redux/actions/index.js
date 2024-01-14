import axios from 'axios';


export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_NAME = 'GET_COUNTRIES_NAME';
export const GET_DETAIL = 'GET_DETAIL';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const GET_FILTER = 'GET_FILTER';
export const GET_ORDER_BY = 'GET_ORDER_BY'
export const GET_PAGINADO = 'GET_PAGINADO'


export function getCountries(){
    return async function(dispatch){
        const response = await axios('http://localhost:3001/countries/');
        return dispatch (
            {
                type: GET_COUNTRIES,
                payload: response.data
            }
        )
    }
}


export function getCountriesName(name){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/countries/?name=${name}`);
        return dispatch (
            {
                type: GET_COUNTRIES_NAME,
                payload: response.data
            }
        )
    }
}

export function getDetail(id) {
    return async function (dispatch) {
            const response = await axios.get(`http://localhost:3001/countries/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: response.data
            })
       
    }
}

export function getActivities() {
    return async function (dispatch) {
            const response = await axios.get(`http://localhost:3001/activities`);
            return dispatch({
                type: GET_ACTIVITIES,
                payload: response.data
            })
       
    }
}

export function postForm(payload) {
    console.log(payload)
    payload.duracion = parseFloat(payload.duracion)
    payload.dificultad = parseInt(payload.dificultad)
    return async function () {
        try {
            const res = await axios.post('http://localhost:3001/activities', payload)
            return res;
        } catch (error) {
            console.log(error)
        }
    }
}

export function getFilter(valor, name) {

             return {
                type: GET_FILTER,
                payload: {valor: valor, name: name}
            }
       
    }

export function getOrderBy(payload) {

        return {
           type: GET_ORDER_BY,
           payload
       }
  
}

export function getPaginado(payload) {
    return {
       type: GET_PAGINADO,
       payload
   }

}