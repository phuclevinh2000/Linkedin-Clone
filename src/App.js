import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { getUserAuth } from './redux/actions';

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, [props]);

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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
