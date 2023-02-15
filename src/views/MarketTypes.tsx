import { useQuery } from '@apollo/client';
import { Link, Outlet } from 'react-router-dom';
import { SubHeader } from '../components/subheader';
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
      <SubHeader>All types:</SubHeader>

      <div className="p-2 bg-green-50 grid grid-cols-2">
        <div>
          {data?.typeList?.map((type: any) => (
            <div key={type.id} className="grid bg-blue-50">
              <Link
                to={'/market/types/' + type.id}
                className="flex hover:border-blue-400 border-2 rounded-md shadow-md p-2 m-2"
              >
                {type.name}
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

export default MarketTypes;
