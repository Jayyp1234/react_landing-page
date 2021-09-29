import logo from './logo.svg';
import './App.css';
import './fonts/icomoon/style.css'
import Nav from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
