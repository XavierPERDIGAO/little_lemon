import Footer from '../components/Footer';
import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header/>
      <main>
        <CallToAction/>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default Layout;