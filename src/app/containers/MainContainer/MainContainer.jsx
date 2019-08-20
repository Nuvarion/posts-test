import React from 'react'
import { renderRoutes } from "react-router-config";
import Header from 'app_components/Header';
import Footer from 'app_components/Footer';

const MainContainer = ({ route: { routes } }) => {
  return (
    <div>
      <Header />
        <main className="main">
            { renderRoutes(routes) }
        </main>
      <Footer />
    </div>
  )
}

export default MainContainer;