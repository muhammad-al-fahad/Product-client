import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './Component/Menu(v 1.0.0)'
import './App(v 1.0.0).css';

function App() {
  return (
    <div className="App">
    <Navbar dark color = "primary">
    <div className='container'>
      <NavbarBrand href = "/"> E-Commerce </NavbarBrand>
    </div>
    </Navbar>
    <Menu/>
    </div>
  );
}

export default App;
