import { useQuery } from '@apollo/client';
import { Link, Outlet } from 'react-router-dom';
import { Header } from '../components/header';
import { graphql } from '../gql';
import { Button } from '../components/button';
const ITEM_LIST = graphql(/* GraphQL */ `
  query ItemList {
    itemList {
      id
      name
    }
  }
`);

const Market = () => {
  const { data, loading, error } = useQuery(ITEM_LIST);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
    <>
      <Header>Market items:</Header>
      <div className="flex flex-wrap">
        {data?.itemList?.map((item: any) => (
          <>
            <Link
              to={/market/ + item.id}
              className="border rounded-md shadow-md p-2 m-2 w-1/3 overflow-hidden md:w-1/4"
              key={item.id}
            >
              {item.name}
            </Link>
            <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-2 rounded">
              Buy
            </Button>
          </>
        ))}
      </div>
    </>
  );
};

export default Market;
