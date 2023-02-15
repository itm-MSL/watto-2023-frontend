import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
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

      <div className="p-2 bg-green-50">
        {data?.typeList?.map((type: any) => (
          <div key={type.id} className="grid bg-blue-50">
            <Link
              to={/types/ + type.id}
              className="hover:border-blue-400 border-2 rounded-md shadow-md p-2 m-2"
            >
              {type.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default MarketTypes;
