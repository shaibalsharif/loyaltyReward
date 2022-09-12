import axios from "axios";
const api=()=>{
    return axios.create(
        {
            baseURL:"https://loyaltyapp-958ed-default-rtdb.asia-southeast1.firebasedatabase.app/"
        }
    )
}

export default api