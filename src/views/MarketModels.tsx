import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { graphql } from '../gql';

const MODEL_LIST = graphql(/* GraphQL */ `
  query ModelList {
    modelList {
      id
      name
    }
  }
`);

const MarketModels = () => {
  const { data, loading, error } = useQuery(MODEL_LIST);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  return (
    <>
      <Header>All models:</Header>

      <div className="p-2 bg-green-50">
        {data?.modelList?.map((model: any) => (
          <div className="grid bg-blue-50">
            <Link
              to={/market/ + model.id}
              className="hover:border-blue-400 border-2 rounded-md shadow-md p-2 m-2"
              key={model.id}
            >
              Name: {model.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default MarketModels;
