import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Signup } from './views/Signup';
import { Login } from './views/Login';
import MarketItems from './views/MarketItems';
import MarketDetails from './views/MarketDetails';
import MarketCreate from './views/MarketCreate';
import MarketTypes from './views/MarketTypes';
import MarketModels from './views/MarketModels';
import Market from './views/Market';

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
        children: [
          {
            path: 'items',
            element: <MarketItems />,
          },
          {
            path: 'types',
            element: <MarketTypes />,
          },
          {
            path: 'models',
            element: <MarketModels />,
          },
        ],
      },
      {
        path: '/market/:id',
        element: <MarketDetails />,
      },
      {
        path: '/market/create',
        element: <MarketCreate />,
      },
    ],
  },
]);
