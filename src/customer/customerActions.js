import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'
import consts from '../consts'

const INITIAL_VALUES = {customers:[{}]}

export function customers(){
    const request = axios.get(`${consts.API_URL_PRIVATE}/students`)
    return {
        type: 'CUSTOMERS_FETCHED',
        payload: request
    }
}


export function init(){
    return [
        customers(),
        initialize('customersForm', INITIAL_VALUES)
    ]
}