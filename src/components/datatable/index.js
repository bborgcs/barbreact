import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { Title, Acao, Button } from './style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Team from '../../api/team';

export default function DataTable(props) {
  const [showRemove, setShowRemove] = useState(false);
  const [showData, setShowData] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const navigate = useNavigate();

  function RotaCreate() {
    navigate('/create');
  }

  function update(team) {
    navigate('/edit', { state: { team } });
  }

  function remove(team) {
    Team.deleteTeam(team.id)
      .then(() => {
        if (props.setData) {
          props.setData(prevData => prevData.filter(t => t.id !== team.id));
        }
        setShowRemove(true);
      })
      .catch(err => console.error("Erro ao remover time:", err));
  }

  const handleCloseRemove = () => {
    setShowRemove(false);
    navigate(0);
  };

  return (
    <>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td>
              <Title>{props.title}</Title>
            </td>
            <td style={{ textAlign: 'right', marginLeft: '20px' }}>
              <Acao className="me-1" onClick={RotaCreate}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFF" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                  <path d="M12.854.146a.5.5 0 0 1 .638.057l2.305 2.305a.5.5 0 0 1-.057.638l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 3 10.707V13h2.293L13.5 4.793 11.207 2.5z"/>
                </svg>
              </Acao>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <Table striped hover>
        <thead>
          <tr>
            {props.rows.map((item, index) =>
              props.hide && props.hide[index] ? (
                <th key={index} className="d-none d-md-table-cell">{item.toUpperCase()}</th>
              ) : (
                <th key={index}>{item.toUpperCase()}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {props.data && props.data.length > 0 ? (
            props.data.map((team, index) => (
              <tr key={index}>
                {props.keys.map((key, i) =>
                  props.hide && props.hide[i] ? (
                    <td key={i} className="d-none d-md-table-cell">{team[key]}</td>
                  ) : (
                    <td key={i}>{team[key]}</td>
                  )
                )}
                <td>
                  <Acao className="me-1" onClick={() => update(team)}>
                    {/* Ícone atualizar */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFF" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                    </svg>
                  </Acao>
                  <Acao className="me-1" onClick={() => { setSelectedTeam(team); setShowData(true); }}>
                    {/* Ícone informações */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFF" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                    </svg>
                  </Acao>
                  <Acao className="me-1" onClick={() => remove(team)}>
                    {/* Ícone remover */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFF" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                    </svg>
                  </Acao>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="100%" style={{ textAlign: 'center', fontWeight: 'bold'}}>Nenhum time inserido</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Modal Remoção */}
      <Modal show={showRemove} onHide={handleCloseRemove} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Remoção - Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>Time excluído com sucesso!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseRemove}>OK</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Informações */}
      <Modal show={showData} onHide={() => setShowData(false)} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Informações - Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTeam ? (
            <>
              <p><strong>Nome:</strong> {selectedTeam.name}</p>
              <p><strong>Pontos:</strong> {selectedTeam.points}</p>
              <p><strong>Saldo de Gols:</strong> {selectedTeam.goalDifference}</p>
              <p><strong>Partidas Jogadas:</strong> {selectedTeam.matchesPlayed}</p>
            </>
          ) : <p>Carregando...</p>}
        </Modal.Body>
      </Modal>
    </>
  );
}
