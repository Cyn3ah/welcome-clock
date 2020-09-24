//import the axios HTTP client to communicate with the API
import axios from 'axios';

class JeopardyService {

    // Tell axios what API service it needs to communicate with and storing some tags/names for things to call specifically later on
    constructor(url = 'http://jservice.io/api/random', client = axios.create()) {
        this.url = url;
        this.client = client;
    }

    // Tell axios to "get" info
    getQuestion() {
        return this.client.get(this.url);
    }

}
export default JeopardyService;
