import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Layout from "./components/Layout";
import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import InfoCustomers from './pages/InfoCustomers'
import InfoServices from './pages/InfoServices'
import InfoTransport from './pages/InfoTransport'
import InfoSecurity from './pages/InfoSecurity'
import Access from './pages/Access'
//Pages
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import LayoutAdmin from "./components/LayoutAdmin";

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    
    <Layout>
      
        <Routes>
          {/*  
              {routes({ user, authenticate, handleLogout }).map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            */}
          <Route path="/" element={<HomePage handleLogout={handleLogout} user={user} />}></Route>
          <Route path="/auth/login" element={<LogIn authenticate={authenticate} />}></Route>
          <Route path="/auth/signup" element={<Signup authenticate={authenticate} />}></Route>
          <Route path="/customers" element={<LayoutAdmin><InfoCustomers /></LayoutAdmin>} />
          <Route path="/InfoServices" element={<LayoutAdmin><InfoServices /></LayoutAdmin>} />
          <Route path="/InfoTransport" element={<LayoutAdmin><InfoTransport /></LayoutAdmin>} />
          <Route path="/Security" element={<LayoutAdmin><InfoSecurity /></LayoutAdmin>} />
          <Route path="/Access" element={<LayoutAdmin><Access /></LayoutAdmin>} />
        </Routes>
      
    </Layout>
    
  ); 
}
