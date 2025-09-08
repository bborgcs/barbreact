import axios from 'axios';

const Team = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: { 'Content-Type': 'application/json' },
});

// métodos customizados
Team.getAll = () => Team.get('/teams');          // GET todos os times
Team.createTeam = (team) => Team.post('/teams', team); // POST um novo time
Team.updateTeam = (id, team) => Team.put(`/teams/${id}`, team); // PUT atualizar
Team.deleteTeam = (id) => Team.delete(`/teams/${id}`); // DELETE

export default Team;
