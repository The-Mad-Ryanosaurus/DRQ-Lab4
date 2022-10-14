import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Read } from './components/read';
import { Create } from './components/create';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Nav bar set to dark */}
          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="me-auto">
                {/* Nav.Links setup to make new pages for navigation */}
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            {/* Displaying the 3 different components (header, content, footer) in their respective paths */}
            <Route path='/home' element={<Content></Content>}></Route>
            <Route path='/read' element={<Read></Read>}></Route>
            <Route path='/create' element={<Create></Create>}></Route>
          </Routes>

          {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}
        </div>
      </Router>
    );
  }
}

export default App;
