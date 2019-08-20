import MainContainer from "app_containers/MainContainer";
import Base from 'app_components/Base';

const routes = [
  {
    component: MainContainer,
    routes: [
      {
        path: '/',
        component: Base
      },
    ]
  }
]

export default routes;