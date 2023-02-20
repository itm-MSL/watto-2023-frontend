import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Signup } from './views/Signup';
import { Login } from './views/Login';
import Market from './views/Market/Market';
import MarketCreate from './views/Market/MarketCreate';
import MarketItems from './views/Market/Items/ListItems';
import MarketTypes from './views/Market/Types/ListTypes';
import MarketTypesDetails from './views/Market/Types/TypeDetails';
import MarketModels from './views/Market/Models/ListModels';
import MarketModelsDetails from './views/Market/Models/ModelDetails';
import Profile from './views/Profile/Profile';
import ProfileMe from './views/Profile/Me/ProfileMe';
import ProfileInventory from './views/Profile/Inventory/ProfileInventory';

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
          {
            path: 'create',
            element: <MarketCreate />,
          },
        ],
      },
      {
        path: '/profile',
        element: <Profile />,
        children: [
          {
            path: 'me',
            element: <ProfileMe />,
          },
          {
            path: 'inventory',
            element: <ProfileInventory />,
          },
        ],
      },
    ],
  },
]);
