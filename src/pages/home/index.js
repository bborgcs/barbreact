import { Container } from 'react-bootstrap'; 
import LoadingIndicator from "react-loading-indicator"; 
import { useState, useEffect } from 'react'; 
import NavigationBar from '../../components/navigationbar'; 
import DataTable from '../../components/datatable'; 
import Team from '../../api/team'; 
export default function Home() { 
    const [data, setData] = useState([]); 
    const [load, setLoad] = useState(true); 
    useEffect(() => { setLoad(true); 
        Team.getAll() .then(res => { console.log(res.data.data); setData(res.data.data); }) 
        .catch(err => console.error(err)) 
        .finally(() => setLoad(false)); 
    }, []); 
    return ( 
        <> 
        <NavigationBar /> 
        { 
            load 
            ? 
            <Container className="d-flex justify-content-center mt-5"> 
            <LoadingIndicator segmentWidth={6} segmentLength={20} segmentColor="#640909ff" spacing={8} /> 
            </Container> 
            : 
            <Container className='mt-2'> 
            <DataTable 
            title="Tabela Campeonato Paranaense 2025" 
            rows={['Time', 'Pontos', 'SG', 'PJ', 'Ações']} 
            hide={[false, false, true, true,false]} 
            data={data} 
            setData={setData} 
            keys={['name', 'points', 'goalDifference', 'matchesPlayed']} 
            resource="times" 
            /> 
            </Container> 
            } 
            </> 
            ); 
        }
        