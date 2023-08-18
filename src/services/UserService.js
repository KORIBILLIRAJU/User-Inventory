import axios from "axios";



const UserService = () => {
    return axios.get("http://localhost:8080/api/users")
}

export default UserService;