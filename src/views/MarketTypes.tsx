import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Button } from '../components/button';
import { Header } from '../components/header';
import { graphql } from '../gql';

const TYPE_LIST = graphql(/* GraphQL */ `
  query TypeList {
    typeList {
      id
      name
    }
  }
`);

const MarketTypes = () => {
  const { data, loading, error } = useQuery(TYPE_LIST);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  return (
    <>
      <Header>All types:</Header>

      <div className="p-2 bg-green-50">
        {data?.typeList?.map((type: any) => (
          <div className="grid bg-blue-50">
            <Link
              to={/market/ + type.id}
              className="hover:border-blue-400 border-2 rounded-md shadow-md p-2 m-2"
              key={type.id}
            >
              Name: {type.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default MarketTypes;
