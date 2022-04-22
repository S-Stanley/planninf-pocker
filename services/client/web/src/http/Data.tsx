import axios from "axios";
import Config from '../config/Config'
import IIssues from "../interfaces/IIssues";

const getData = async(personalToken: string, usernameBasicAuth: string, passwordBasicAuth: string): Promise<IIssues[]> => {
    try {
        const req = await axios.post(`${Config.Api.url}/data`, {
            access_token: personalToken,
            username: usernameBasicAuth,
            password: passwordBasicAuth,
        });
        return (req.data);
    }
    catch (e) {
        console.log(e);
        alert('Err');
        return ([]);
    }
}

export default {
    getData,
}