import axios from 'axios';

const Team = axios.create({
    
    baseURL: 'http://localhost:3000/api/teams',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default Team;