import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1Glbj7wrmUxAymwlcn6Sja0rYiD8RRpGHd90jzrvWM0'
    }
});
