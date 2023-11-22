import logo from './logo.svg';
import Calender from './Calender';
import Parasha from './Parasha';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
function App() {
  return (<>
 <BrowserRouter>
      <Routes>
    <Route path="/"element={<Calender/>}></Route>
    <Route path="/parasha"element={<Parasha/>}></Route>
      </Routes>
      </BrowserRouter>
  
  </>
    
  );
}

export default App;
