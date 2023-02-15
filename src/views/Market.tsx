import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
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
      <Link to={'/market/create'}>
        <Button> Create </Button>
      </Link>
      <div className="p-2 bg-green-50">
        {data?.itemList?.map((item: any) => (
          <div className="grid bg-blue-50">
            <Link
              to={/market/ + item.id}
              className="hover:border-blue-400 border-2 rounded-md shadow-md p-2 m-2"
              key={item.id}
            >
              Name: {item.name} Price: {item.price}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Market;
