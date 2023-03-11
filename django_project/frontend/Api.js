import axios from 'axios'

const baseURL = process.env.API_URL+"/api"

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        // 'Authorization': "JWT " + access_token,
        'Content-Type': 'application/json',
        'accept': 'application/json',
        // 'X-CSRFToken': Cookies.get('csrftoken')
    }
    // withCredentials: true
});

export default axiosInstance