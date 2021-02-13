import GlobalStyles from '../styles/globalStyles.js'
import Layout from '../components/Layout/index.js'
import NavBar from '../components/NavBar/index.js'

function Home() {
    return (
    <div>
        <Layout>
            <NavBar />
        </Layout>
        
        <GlobalStyles />
    </div>
    )
}

export default Home