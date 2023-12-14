import './App.css';
import NavbarOr from './Components/Header/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <div className='div-header'>
      <NavbarOr/>
      <div className="div-separator" style={{ backgroundColor: 'black' }}></div>
        <Body/>
       <Footer/>
  </div>
  );
}

export default App;
