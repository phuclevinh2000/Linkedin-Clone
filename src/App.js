import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route
            path='/home'
            element={
              <>
                <Header /> <Home />
              </>
            }
            exact
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
