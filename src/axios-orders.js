import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-skinny-salad.firebaseio.com/'
});

export default instance;