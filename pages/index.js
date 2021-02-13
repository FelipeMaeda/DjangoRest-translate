import GlobalStyles from '../styles/globalStyles.js'
import Layout from '../components/Layout/index.js'
import NavBar from '../components/NavBar/index.js'

function Home() {
    return (
    <div>
        <NavBar />
        <Layout>
        </Layout>
        
        <GlobalStyles />
        <h4>Home</h4>
    </div>
    )
}

export default Home