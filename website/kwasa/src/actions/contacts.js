import axios from 'axios';
import { ADD_CONTACT } from "./types";

export const addContact = (contacts) => dispatch => {
    axios.post('http://localhost:8000/api/contacts/')
        .then(res => {
            dispatch({
                type: ADD_CONTACT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
