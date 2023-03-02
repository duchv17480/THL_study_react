import axios from 'axios';

const PHONE_API_BASE_URL = "http://localhost:8080/api/v1/phone";

class PhoneService {

    getPhone(){
        return axios.get(PHONE_API_BASE_URL);
    }

    createPhone(phone) {
        return axios.post(PHONE_API_BASE_URL + '/create', phone)
    }

    deletePhone(id){
        return axios.delete(PHONE_API_BASE_URL + '/delete/' + id);
    }
    getPhoneById(id) {
        return axios.get(PHONE_API_BASE_URL + '/' +id)
    }
    updatePhone(phone, id) {
        return axios.put(PHONE_API_BASE_URL + 'update' + id)
    }
}

export default  new PhoneService()