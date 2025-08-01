import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import Home from '../components/Home/Home';
import CategoryPick from '../components/CategoryBar/CategoryPick';
import BrandPick from '../components/CategoryBar/BrandPick';
import DrinkPick from '../components/DrinkPick/DrinkPick';
import PostDrink from '../components/DrinkPick/PostDrink';
import UpdateDrink from '../components/DrinkPick/UpdateDrink'
import UserPosts from '../components/UserInfo/UserPosts';
import UserRevs from '../components/UserInfo/UserRevs';
import UserReview from '../components/UserInfo/UserReview';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: '/category/:categoryId',
            element: <CategoryPick />
          },
          {
            path: '/brand/:brandId',
            element: <BrandPick />
          },
          {
            path: '/drink/:drinkId',
            element: <DrinkPick />
          },
          {
            path: '/drink/create',
            element: <PostDrink />
          },
          {
            path: '/drink/:drinkId/update',
            element: <UpdateDrink />
          },
          {
            path: '/user/posts',
            element: <UserPosts />
          },
          {
            path: '/user/reviews',
            element: <UserRevs />
          },
          {
            path: '/user/reviews/:revId',
            element: <UserReview />
          }
        ]
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
    ],
  },
]);
