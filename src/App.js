import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Categoryes from './Pages/Categoryes';
import Product from './Pages/Product';
import Shop from './Pages/Shop'
import Footer from './Components/Footer/Footer';


function App() {
  return(
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<Categoryes category="Men"/>}/>
          <Route path='/womens' element={<Categoryes category="Women"/>}/>
          <Route path='/combos' element={<Categoryes category="Combos"/>}/>
          <Route path='/joggers' element={<Categoryes category="joggers"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  ); 
}

export default App;