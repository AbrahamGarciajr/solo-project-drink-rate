import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import Home from '../components/Home/Home';
import CategoryPick from '../components/CategoryBar/CategoryPick';
import BrandPick from '../components/CategoryBar/BrandPick';
import DrinkPick from '../components/Drinks/DrinkPick';
import PostDrink from '../components/Drinks/PostDrink';
import UpdateDrink from '../components/Drinks/UpdateDrink';

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
