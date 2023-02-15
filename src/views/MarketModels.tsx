import { useQuery } from '@apollo/client';
import { Link, Outlet } from 'react-router-dom';
import { SubHeader } from '../components/subheader';
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
      <SubHeader>All models:</SubHeader>

      <div className="p-2 bg-green-50 grid grid-cols-2">
        <div>
          {data?.modelList?.map((model: any) => (
            <div key={model.id} className="grid bg-blue-50 px-4">
              <Link
                to={'/market/models/' + model.id}
                className="flex hover:scale-105 border-2 rounded-md shadow-md py-2 my-2 mx-4 px-4"
              >
                {model.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="grid bg-blue-50 p-2">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MarketModels;
