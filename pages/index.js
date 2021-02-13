import GlobalStyles from '../styles/globalStyles'
import Layout from '../components/layout/index'
import NavBar from '../components/layout/navbar/index'

function Home() {
    return (
    <div>
        <NavBar />
        <Layout>
            <h1>Rocketseat</h1>    
        </Layout>
        
        <GlobalStyles />
        <h4>Home</h4>
    </div>
    )
}

export default Home