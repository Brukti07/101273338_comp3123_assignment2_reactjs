import axios from 'axios';


const EMPLOYEE_API_BASE_URL = "http://localhost:3001/api/v1/employee";

class EServer{
    getEmployee = () =>{
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    
}
export default new EServer()