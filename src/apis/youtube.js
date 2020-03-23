import axios from 'axios';

const KEY = 'AIzaSyBS7328D854jmwiW2Xal2H3eHuC_Reeys4';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults:5,
        type: 'video',
        key: KEY

    }
});