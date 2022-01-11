
import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom';
import Readme from './components/Readme';

//This is app file through whihc we will combine all the components and keep itt properly

function App() {
  // Initiating react-router-dom
  return (
    <BrowserRouter>
      <div className='container-fluid p-0'>
        {/*Navigation Component  */}
          <Nav/>
          <Route path="/" exact>
          {/*Home Component  */}
            <Home/>
          </Route>
          <Route path="/readme" exact>
          {/*Readme Component  */}
            <Readme/>
          </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
