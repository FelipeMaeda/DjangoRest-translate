import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import NavBarMenu from '../components/NavBar/index.js';
import { Container } from 'react-bootstrap';
import { createGlobalStyle } from '../styles/globalStyles';

function Home() {
    return (
        <div>
            <NavBarMenu></NavBarMenu>
            <Container>
                <Button>Teste</Button>
            </Container>
        </div>
    )
}

export default Home