import { useState } from "react"
import GlobalStyles from '../styles/globalStyles'
import Layout from '../components/Layout/menu'

function Home() {
    return (
    <div>
        <Layout>
            <h1>Rocketseat</h1>    
        </Layout>
        
        <GlobalStyles />
        <h4>Home</h4>
    </div>
    )
}

export default Home