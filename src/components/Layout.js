import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';
import store from './../utils/store';
import { Provider } from 'react-redux';
import UserContext from '../utils/UserContext';



function Layout() {
  const [user, setUser] = useState({
    name: "Swarup Das",
    email: "swarupd1999@gmail.com",
  });
  return (
    <Provider store={store}>
          <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
      <Header/>
      <Outlet/>
      <Footer/>
      </UserContext.Provider>
    </Provider>
  )
}

export default Layout
