import './App.css';
import Form from './components/Form';
import List from './components/List';
import { BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
      <Route exact path='/' element={<Form/>}/>
      <Route exact path='/list' element={<List/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
