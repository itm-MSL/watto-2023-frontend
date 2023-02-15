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
  console.log(data);
  return (
    <>
      <SubHeader>All items:</SubHeader>

      <div className="p-2 bg-green-50 grid grid-cols-2">
        <div>
          {data?.itemList?.map((item: any) => (
            <div key={item.id} className="grid bg-blue-50">
              <Link
                to={'/market/items/' + item.id}
                className="flex hover:border-blue-400 border-2 rounded-md shadow-md p-2 m-2"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default MarketItems;
