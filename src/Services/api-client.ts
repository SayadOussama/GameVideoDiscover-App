import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'f78db8260e964e5ab38ee0ecb072091b'
    }
})
 