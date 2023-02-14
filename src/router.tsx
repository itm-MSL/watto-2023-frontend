import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Signup } from './views/Signup';
import { Login } from './views/Login';
import Market from './views/Market';
import MarketDetails from './views/MarketDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/market',
        element: <Market />,
      },
      {
        path: '/market/:id',
        element: <MarketDetails />,
      },
    ],
  },
]);
