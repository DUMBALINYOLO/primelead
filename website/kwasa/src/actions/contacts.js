import axios from 'axios';
import { ADD_CONTACT } from "./types";
import { contactURL } from '../constants';

export const addContact = () => dispatch => {
    axios.get(contactURL)
        .then(res => {
            dispatch({
                type: ADD_CONTACT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
