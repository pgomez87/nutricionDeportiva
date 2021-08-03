import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomeScreen from './components/pages/HomeScreen'
import ProductScreen from './components/pages/ProductScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          {/* :id = param (We use it to match if needed in an conditional) */}
          <Route path='/product/:id' component={ProductSScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
