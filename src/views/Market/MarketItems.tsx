import { useQuery } from '@apollo/client';
import { Link, Outlet } from 'react-router-dom';
import { SubHeader } from '../../components/subheader';
import { graphql } from '../../gql';

const ITEM_LIST = graphql(/* GraphQL */ `
  query ItemList {
    itemsExcludingOwnedByUser {
      id
      name
      model {
        id
        name
      }
      type {
        id
      }
      price
      user {
        id
        name
      }
    }
  }
`);

export const mapModelToColor = (modelName?: string) => {
  const modelColorMap: { [name: string]: string } = {
    gilded: 'border-yellow-600 bg-yellow-100 hover:text-yellow-600',
    golden: 'border-yellow-400 bg-yellow-50 hover:text-yellow-400',
    royal: 'border-blue-600 bg-blue-100 hover:text-blue-600',
    regal: 'border-green-400 bg-green-100 hover:text-green-400',
    silver: 'border-stone-500 bg-stone-100 hover:text-stone-400',
    enchanted: 'border-purple-400 bg-purple-100 hover:text-purple-400',
    embossed: 'border-red-400 bg-red-100 hover:text-red-400',
    epic: 'border-fuchsia-500 bg-fuchsia-200 hover:text-fuchsia-500',
  };
  if (!modelName) return 'bg-gray-100';
  return modelColorMap[modelName];
};

const MarketItems = () => {
  const { data, loading, error } = useQuery(ITEM_LIST);

  if (loading) return <div className="animate-spin">.</div>;
  if (error)
    return (
      <div>
        Error: {error.message}
        {(window.location.href = '/login')}
      </div>
    );
  return (
    <>
      <SubHeader>Items for sale</SubHeader>

      <div className="p-2 grid grid-cols-2 pt-2">
        <div>
          {data?.itemsExcludingOwnedByUser?.map((item) => (
            <div key={item.id} className="grid px-4">
              <Link
                to={'/market/items/' + item.id}
                className={
                  'flex justify-between hover:scale-105 active:scale-105 border-2 rounded-md shadow-md py-2 my-2 mx-4 px-4  ' +
                  mapModelToColor(item?.model?.name?.toString())
                }
              >
                <h1 className="font-medium">{item.user.name} is selling: </h1>
                <h1 className="font-semibold">{item?.name?.toUpperCase()}</h1>
                <p className="font-medium">Price: {item?.price?.toFixed(2)}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="grid ml-2 ">
          {/* Outlet for Details view of selected item */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MarketItems;
