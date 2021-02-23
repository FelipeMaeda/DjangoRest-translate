import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import NavBarMenu from '../components/NavBar/index.js'

function Home() {
    return (
    <div>
        <NavBarMenu></NavBarMenu>
        <Button>Teste</Button>
    </div>
    )
}

export default Home