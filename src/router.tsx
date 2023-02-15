import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Signup } from './views/Signup';
import { Login } from './views/Login';
import Market from './views/Market';
import MarketCreate from './views/MarketCreate';
import MarketItems from './views/MarketItems';
import MarketItemsDetails from './views/MarketItemsDetails';
import MarketTypes from './views/MarketTypes';
import MarketTypesDetails from './views/MarketTypesDetails';
import MarketModels from './views/MarketModels';
import MarketModelsDetails from './views/MarketModelsDetails';

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
            children: [
              {
                path: ':itemid',
                element: <MarketItemsDetails />,
              },
            ],
          },
          {
            path: 'types',
            element: <MarketTypes />,
            children: [
              {
                path: ':typeid',
                element: <MarketTypesDetails />,
              },
            ],
          },
          {
            path: 'models',
            element: <MarketModels />,
            children: [
              {
                path: ':modelid',
                element: <MarketModelsDetails />,
              },
            ],
          },
        ],
      },
      {
        path: '/market/create',
        element: <MarketCreate />,
      },
    ],
  },
]);
