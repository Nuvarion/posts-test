import MainContainer from "app_containers/MainContainer";
import Base from 'app_components/Base';
import Post from 'app_components/Post';

const routes = [
  {
    component: MainContainer,
    routes: [
      {
        path: '/',
        component: Base
      },
      {
        path: '/post/:id',
        component: Post
      }
    ]
  }
]

export default routes;