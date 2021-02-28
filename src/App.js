import React from 'react'
import Sidebar from './components/Sidebar'
import ProductList from './components/ProductList'
import CompanyInfoBar from './components/CompanyInfoBar'
import Navigation from './components/Navigation'
import './App.css'

function App() {
    return (
        <div className="container">
            <Navigation />
            <div className="container-wrapper">
                <Sidebar />
                <ProductList />
                <CompanyInfoBar />
            </div>

        </div>
    )
}

export default App
