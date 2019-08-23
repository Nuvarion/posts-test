import React from 'react'
import { renderRoutes } from "react-router-config";
import Header from 'app_components/Header';

import './MainContainer.scss';

const MainContainer = ({ route: { routes } }) => {
  return (
    <div className="container-all">
      <Header />
        <main className="main">
            { renderRoutes(routes) }
        </main>
    </div>
  )
}

export default MainContainer;