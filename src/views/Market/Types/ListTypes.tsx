import { useQuery } from '@apollo/client';
import { Link, Outlet } from 'react-router-dom';
import { SubHeader } from '../../../components/subheader';
import { graphql } from '../../../gql';

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

  return (
    <>
      <SubHeader>All types</SubHeader>

      <div className="p-2 grid grid-cols-2">
        <div>
          {data?.typeList?.map((type: any) => (
            <div key={type.id} className="px-4 grid">
              <Link
                to={'/market/types/' + type.id}
                className="border-teal-600 bg-teal-100 hover:text-teal-600 flex justify-between hover:scale-105 active:scale-105 border-2 rounded-md shadow-md py-2 my-2 mx-4 px-4"
              >
                {type.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="grid ml-2">
          {/* Outlet for Details view of selected type */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MarketTypes;