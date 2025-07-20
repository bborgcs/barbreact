import { Container } from 'react-bootstrap';
import NavigationBar from '../../components/navigationbar';
import DataTable from '../../components/datatable';
import { campeonato } from '../../utils/datatest';

export default function Home() {

    return (
        <>
            <NavigationBar />
            <Container className='mt-2'>
                <DataTable 
                    title="Tabela Campeonato Paranaense 2025" 
                    rows={['Time', 'Pontos', 'SG', 'PJ', 'Ações']}
                    hide={[false, false, true, true,false]}
                    data={campeonato}
                    keys={['time', 'pts', 'sg', 'pj']}
                />
            </Container>
        </>
    )
}
