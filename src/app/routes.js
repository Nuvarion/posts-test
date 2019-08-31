import MainContainer from "app_containers/MainContainer";
import HomePage from './pages/HomePage';
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
        component: HomePage
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