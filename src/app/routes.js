import MainContainer from "app_containers/MainContainer";
import Base from 'app_components/Base';
import PostPage from './pages/PostPage/PostPage';
import AddPostPage from './pages/AddPostPage/AddPostPage';
import StartPageContainer from 'app_containers/StartPageContainer';

const routes = [
  {
    component: MainContainer,
    routes: [
      {
        path: '/',
        component: StartPageContainer,
        exact: true
      },
      {
        path: '/posts',
        component: Base
      },
      {
        path: '/post/:id',
        component: PostPage
      },
      {
        path: '/add/post',
        component: AddPostPage
      }
    ]
  }
]

export default routes;