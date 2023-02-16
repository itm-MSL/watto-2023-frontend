import { useQuery } from '@apollo/client';
import { Link, Outlet } from 'react-router-dom';
import { SubHeader } from '../components/subheader';
import { graphql } from '../gql';

const ITEM_LIST = graphql(/* GraphQL */ `
  query ItemList {
    itemList {
      id
      name
      model {
        id
      }
      type {
        id
      }
      price
    }
  }
`);

const MarketItems = () => {
  const { data, loading, error } = useQuery(ITEM_LIST);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <SubHeader>All items:</SubHeader>

      <div className="p-2 bg-blue-500 grid grid-cols-2">
        <div>
          {data?.itemList?.map((item: any) => (
            <div key={item.id} className="grid bg-blue-50 px-4">
              <Link
                to={'/market/items/' + item.id}
                className="flex hover:scale-105 border-2 rounded-md shadow-md py-2 my-2 mx-4 px-4"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="grid bg-blue-50 ml-2 shadow-md">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MarketItems;
