import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid p-0'>
        <Nav/>
        <Route path="/" exact>
          <Home/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
